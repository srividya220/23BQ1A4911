# Campus Notification Microservice

## Stage 1

### Get Notifications
GET /api/notifications

### Get Unread Notifications
GET /api/notifications/unread

### Mark Notification As Read
PATCH /api/notifications/{id}/read

### Mark All Notifications As Read
PATCH /api/notifications/read-all

### Delete Notification
DELETE /api/notifications/{id}

### Create Notification
POST /api/notifications

### Real-Time Notifications
WebSocket based notification delivery