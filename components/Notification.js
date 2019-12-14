import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo';

const NOTIFICATION_KEY = 'UdaciCards:notifications'

export function SetNotification(){
    Permissions.askAsync(Permissions.NOTIFICATIONS)
    .then(({ status }) => {
    if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            const localNotification = {
                title: 'Are you there ?',
                body: 'Dont forget to complete at least one quiz per day!'
            };

            //console.log('notificationSet')

            let tm = new Date()
            tm.setDate(tm.getDate() + 1)
            tm.setHours(20)
            tm.setMinutes(0)
            
            console.log(tm)

            const schedulingOptions = {
                repeat: 'day',
                time: tm 
                //time: (new Date()).getTime() + 1000
            }

            Notifications.scheduleLocalNotificationAsync(
                localNotification, schedulingOptions
            )

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        }
        else {
            console.log('notGranted')
        }
    })
}

export function CancelNotifications(){
    Notifications.cancelAllScheduledNotificationsAsync()
}

/*
handleNotification() {
    console.log('notification sent')
}
async componentDidMount() {
    this.confNotification()
    Notifications.addListener(this.handleNotification)
}
*/