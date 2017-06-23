//
//  CalendarManager.m
//  ReactNativeUI
//
//  Created by rocky on 2017/6/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTConvert.h>
@implementation CalendarManager
// 默认名称
RCT_EXPORT_MODULE()

// 对外提供调用方法
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  NSLog(@"方法名：%@位置：%@",name,location);
}


// 时间格式化 - secondsSinceUnixEpoch
RCT_EXPORT_METHOD(addEventTime1:(NSString *)name location:(NSString *)location date:(NSNumber *)secondsSinceUnixEpoch){
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
  NSLog(@"方法名：%@位置：%@ 时间：%@",name,location,date);
}

// 时间格式化 - ISO8601DateString
RCT_EXPORT_METHOD(addEventTime2:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString){
  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
  NSLog(@"方法名：%@位置：%@ 时间：%@",name,location,date);
}

// 时间格式化 - 自动转换类型
RCT_EXPORT_METHOD(addEventTime3:(NSString *)name location:(NSString *)location date:(NSDate *)date){
  NSDateFormatter *formatter = [[NSDateFormatter alloc]init];
  [formatter setDateFormat:@"yyyy-MM-dd"];
  NSLog(@"方法名：%@位置：%@ 时间：%@",name,location,[formatter stringFromDate:date]);
}

// 参数为字典类型
RCT_EXPORT_METHOD(addEventDic:(NSString *)name details:(NSDictionary *)dic){
  NSString *location = [RCTConvert NSString:[dic objectForKey:@"location"]];
  NSDate *date = [RCTConvert NSDate:[dic objectForKey:@"time"]];
  NSArray *description = [RCTConvert NSArray:[dic objectForKey:@"description"]];
  NSLog(@"获取事件信息\n 事件：%@  地点：%@  时间： %@  备注1：%@  备注2：%@",name,location,date,description[0],description[1]);
}

// 有回调函数
RCT_EXPORT_METHOD(addEventCallBack:(RCTResponseSenderBlock)callback){
  NSArray *events = @[@"rocky",@"male",@"30"];
  callback(@[[NSNull null],events]);
}

// Promises回调函数
RCT_REMAP_METHOD(findEventsPromise,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events =@[@"张三",@"李四",@"王五",@"赵六"];
  if (events) {
    resolve(events);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }

}

//进行设置封装常量给JavaScript进行调用
-(NSDictionary *)constantsToExport{
  return @{@"firstDayOfTheWeek":@"Monday"};
}






@end
