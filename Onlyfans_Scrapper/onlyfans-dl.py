#!/usr/bin/python3


import re
import os
import sys
import json
import shutil
import requests
import time
import datetime as dt
import hashlib
import pandas as pd
from sqlalchemy import true

# maximum number of posts to index
# DONT CHANGE THAT
POST_LIMIT = 100

# api info
URL = "https://onlyfans.com"
API_URL = "/api2/v2"

# \TODO dynamically get app token
# Note: this is not an auth token
APP_TOKEN = "33d57ade8c02dbc5a333db99ff9ae26a"

# user info from /users/customer
USER_INFO = {}

# target profile
PROFILE = ""
# profile data from /users/<profile>
PROFILE_INFO = {}
PROFILE_ID = ""


# helper function to make sure a dir is present
def assure_dir(path):
    if not os.path.isdir(path):
        os.mkdir(path)

# Create Auth with Json
def create_auth():
    with open("D:\Scraping Projects\onlyfans\checking\\auth.json") as f:
        ljson = json.load(f)
    return {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": ljson["user-agent"],
        "Accept-Encoding": "gzip, deflate",
        "user-id": ljson["user-id"],
        "x-bc": ljson["x-bc"],
        "Cookie": "sess=" + ljson["sess"],
        "app-token": APP_TOKEN
    }


# Every API request must be signed
def create_signed_headers(link, queryParams):
    global API_HEADER
    path = "/api2/v2" + link
    if (queryParams):
        query = '&'.join('='.join((key, val)) for (key, val) in queryParams.items())
        path = f"{path}?{query}"
    unixtime = str(int(dt.datetime.now().timestamp()))
    msg = "\n".join([dynamic_rules["static_param"], unixtime, path, API_HEADER["user-id"]])
    message = msg.encode("utf-8")
    hash_object = hashlib.sha1(message)
    sha_1_sign = hash_object.hexdigest()
    sha_1_b = sha_1_sign.encode("ascii")
    checksum = sum([sha_1_b[number] for number in dynamic_rules["checksum_indexes"]]) + dynamic_rules["checksum_constant"]
    API_HEADER["sign"] = dynamic_rules["format"].format(sha_1_sign, abs(checksum))
    API_HEADER["time"] = unixtime
    return


# API request convenience function
# getdata and postdata should both be JSON
def api_request(endpoint, getdata=None, postdata=None, getparams=None):
    if getparams == None:
        getparams = {
            "order": "publish_date_desc"
        }
    if getdata is not None:
        for i in getdata:
            getparams[i] = getdata[i]

    if postdata is None:
        if getdata is not None:
            # Fixed the issue with the maximum limit of 10 posts by creating a kind of "pagination"

            create_signed_headers(endpoint, getparams)
            list_base = requests.get(URL + API_URL + endpoint,
                                     headers=API_HEADER,
                                     params=getparams).json()
            posts_num = len(list_base)

            if posts_num >= POST_LIMIT:
                beforePublishTime = list_base[POST_LIMIT - 1]['postedAtPrecise']
                getparams['beforePublishTime'] = beforePublishTime

                while posts_num == POST_LIMIT:
                    # Extract posts
                    create_signed_headers(endpoint, getparams)
                    list_extend = requests.get(URL + API_URL + endpoint,
                                               headers=API_HEADER,
                                               params=getparams).json()
                    posts_num = len(list_extend)
                    # Merge with previous posts
                    list_base.extend(list_extend)

                    if posts_num < POST_LIMIT:
                        break

                    # Re-add again the updated beforePublishTime/postedAtPrecise params
                    beforePublishTime = list_extend[posts_num - 1]['postedAtPrecise']
                    getparams['beforePublishTime'] = beforePublishTime

            return list_base
        else:
            create_signed_headers(endpoint, getparams)
            print('x')
            return requests.get(URL + API_URL + endpoint,
                                headers=API_HEADER,
                                params=getparams)
    else:
        create_signed_headers(endpoint, getparams)
        return requests.post(URL + API_URL + endpoint,
                             headers=API_HEADER,
                             params=getparams,
                             data=postdata)


# /users/<profile>
# get information about <profile>
# <profile> = "customer" -> info about yourself
def get_user_info(profile):
    info = api_request("/users/" + profile).json()
    if "error" in info:
        print("\nERROR: " + info["error"]["message"])
        # bail, we need info for both profiles to be correct
        exit()
    return info

# to get subscribesCount for displaying all subs
# info about yourself
def user_me():
    me = api_request("/users/me").json()
    if "error" in me:
        print("\nERROR: " + me["error"]["message"])
        # bail, we need info for both profiles to be correct
        exit()
    return me


def get_messages():
    params = {
        "limit": "10",
        "offset": "0",
        "filter":"",
        "order":"unread_tips",
        "skip_users":"all"
    }
    return api_request("/chats", getparams=params).json()

def get_messages_x(nextOffset):
    params = {
        "limit": "10",
        "offset": str(nextOffset),
        "filter":"",
        "order":"unread_tips",
        "skip_users":"all"
    }
    return api_request("/chats", getparams=params).json()


def process_messages(messages,nextOffset):
    column_names = ["withUser_id", "withUser_view", "canGoToProfile", "canSendMessags", "canNotSendReason", "unreadMessagesCount", "hasUnreadTips",  
    "isMutedNotifications" ,"lastMessage_responseType" ,"lastMessage_text" ,  "lastMessage_lockedText" ,"lastMessage_isFree" ,"lastMessage_price" ,
    "lastMessage_isMediaReady" ,"lastMessage_mediaCount" ,"lastMessage_media_id" ,"lastMessage_media_canView" ,"lastMessage_media_canView" ,"lastMessage_media_type" ,
    "lastMessage_media_src" ,"lastMessage_media_preview" ,"lastMessage_media_thumb" ,"lastMessage_media_locked" ,"lastMessage_media_duration" ,"lastMessage_media_hasError" ,
    "lastMessage_media_squarePreview" ,"lastMessage_media_video_mp4" ,"lastMessage_media_videoSources_720" ,"lastMessage_media_videoSources_240" ,
    "lastMessage_media_source_source" ,"lastMessage_media_info_source" ,"lastMessage_media_info_source_width" ,"lastMessage_media_info_source_height" ,"lastMessage_media_info_source_size" ,
    "lastMessage_media_info_preview_width" ,"lastMessage_media_info_preview_height" ,"lastMessage_media_info_preview_size" ,
    "lastMessage_isTip", "lastMessage_isReportedByMe", "lastMessage_fromUser_id", "lastMessage_fromUser_view", "lastMessage_isFromQueue", "lastMessage_id", 
    "lastMessage_isOpened", "lastMessage_isNew", "lastMessage_createdAt", "lastMessage_changedAt", "lastMessage_cancelSeconds", "lastMessage_isLiked", "lastMessage_canPurchase",
    "lastMessage_canPurchaseReason", "lastMessage_canReport", "lastReadMessageId", "hasPurchasedFeed"]
    df = pd.DataFrame()

    for p in messages['list']:
        

        df = df.append({"withUser_id":p['withUser']['id'], "withUser_view":p['withUser']['_view'], "canGoToProfile":p['canGoToProfile'], "canSendMessage":p['canSendMessage'], "canNotSendReason":p['canNotSendReason'], "unreadMessagesCount":p['unreadMessagesCount'], "hasUnreadTips":p['hasUnreadTips'],  
    "isMutedNotifications":p['isMutedNotifications'],"lastMessage_responseType":p['lastMessage']['responseType'] ,"lastMessage_text":p['lastMessage']['text'] ,  "lastMessage_lockedText":p['lastMessage']['lockedText'] ,"lastMessage_isFree":p['lastMessage']['isFree'] ,"lastMessage_price":p['lastMessage']['price'] ,
    "lastMessage_isMediaReady":p['lastMessage']['isMediaReady'] ,"lastMessage_mediaCount":p['lastMessage']['mediaCount'] ,
    "lastMessage_isTip":p['lastMessage']['isTip'] , "lastMessage_isReportedByMe":p['lastMessage']['isReportedByMe'] , "lastMessage_fromUser_id":p['lastMessage']['fromUser']['id'] , 
    "lastMessage_fromUser_view":p['lastMessage']['mediaCount'] , "lastMessage_isFromQueue":p['lastMessage']['isFromQueue'] , "lastMessage_id":p['lastMessage']['id'] , 
    "lastMessage_isOpened":p['lastMessage']['isOpened'] , "lastMessage_isNew":p['lastMessage']['isNew'] , "lastMessage_createdAt":p['lastMessage']['createdAt'] , "lastMessage_changedAt":p['lastMessage']['changedAt'] , 
    "lastMessage_cancelSeconds":p['lastMessage']['cancelSeconds'] , "lastMessage_isLiked":p['lastMessage']['isLiked'] , "lastMessage_canPurchase":p['lastMessage']['canPurchase'] ,
    "lastMessage_canPurchaseReason":p['lastMessage']['mediaCount'] , "lastMessage_canReport":p['lastMessage']['mediaCount'] , "lastReadMessageId":p['lastReadMessageId'] , 
    "hasPurchasedFeed":p['hasPurchasedFeed'] },ignore_index=True)
    df.to_csv("messages/messages_"+str(nextOffset)+".csv")
    return df


# get all Payments in json
def get_payments():
    params = {
        "limit": "10"
    }
    return api_request("/payouts/transactions", getparams=params).json()

def get_payments_x(nextMarker):
    params = {
        "limit": "10",
        "marker": str(nextMarker)
    }
    return api_request("/payouts/transactions", getparams=params).json()

def process_payment(payments,marker):
    column_names = ["amount", "vatAmount", "net", "fee", "createdAt", "currency", "description", "status", "user_view", 
    "user_id", "user_name", "user_username", "user_avatar", "payoutPendingDays", "card_last4", "card_brand", "id"]
    df = pd.DataFrame(columns = column_names)

    for p in payments['list']:
        try:
            card = p['card']['last4']
        except:
            card = "NAN"

        try:
            brand = p['card']['brand']
        except: 
            brand = "NAN"
        try:
            payoutPendingDays = p['payoutPendingDays']
        except:
            payoutPendingDays = "NAN"

        df = df.append({'amount': p['amount'], 'vatAmount': p['vatAmount'], 'status': p['status'], 'net': p['net'], 'fee':p['fee'], 'createdAt': p['createdAt'], 'currency': p['currency'], 'description': p['description'], 'user_view': p['user']['view'], 'user_id': p['user']['id'], 'user_name': p['user']['name'], 'user_username': p['user']['username'], 'user_avatar': p['user']['avatar'], 'payoutPendingDays': payoutPendingDays, 'card_last4': card, 'card_brand': brand, 'id': p['id']},ignore_index=True)
    df.to_csv("payments/payments_"+str(marker)+".csv")
    return df

# get all subscriptions in json
def get_subs():
    SUB_LIMIT = str(user_me()["subscribesCount"])
    params = {
        "type": "active",
        "sort": "desc",
        "field": "expire_date",
        "limit": SUB_LIMIT
    }
    return api_request("/subscriptions/subscribes", getparams=params).json()


# download public files like avatar and header
new_files = 0

def select_sub():
    # Get Subscriptions
    SUBS = get_subs()
    sub_dict.update({"0": "*** Download All Models ***"})
    ALL_LIST = []
    for i in range(1, len(SUBS)+1):
                ALL_LIST.append(i)
    for i in range(0, len(SUBS)):
        sub_dict.update({i+1: SUBS[i]["username"]})
    if len(sub_dict) == 1:
        print('No models subbed')
        exit()

    # Select Model
    if ARG1 == "all":
        return ALL_LIST
    MODELS = str((input('\n'.join('{} | {}'.format(key, value) for key, value in sub_dict.items()) + "\nEnter number to download model\n")))
    if MODELS == "0":
        return ALL_LIST
    else:
        return [x.strip() for x in MODELS.split(',')]















if __name__ == "__main__":

    # Get the rules for the signed headers dynamically, as they may be fluid
    dynamic_rules = requests.get(
        'https://raw.githubusercontent.com/DATAHOARDERS/dynamic-rules/main/onlyfans.json').json()
    # Create Header
    API_HEADER = create_auth()
    

    messages = get_messages()
    print(messages)
    hasMore = messages['hasMore']
    nextOffset = messages['nextOffset']
    process_messages(messages,nextOffset)
   
    

    while hasMore:
        del(messages)
        messages = get_messages_x(nextOffset) 
        print(messages) 
        hasMore = messages['hasMore']
        nextOffset = messages['nextOffset']
        df = process_messages(messages,nextOffset)
        print(hasMore)
        print(nextOffset)

    # Payments Section Started
    '''

    payments = get_payments()
    hasMore = payments['hasMore']
    nextMarker = payments['nextMarker']
    process_payment(payments,nextMarker)
    #exit()
    

    while hasMore:
        del(payments)
        payments = get_payments_x(nextMarker) 
        print(payments) 
        hasMore = payments['hasMore']
        nextMarker = payments['nextMarker']
        df = process_payment(payments,nextMarker)
        print(hasMore)
        print(nextMarker)
        
    ''' 
    # Payments Section Ended
    
