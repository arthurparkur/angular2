Описание задачи:
Необходимо разработать Angular 2 приложение, в котором будет возможность:

авторизоваться через API
изменить имя в профиле
просмотреть список заказов  
Прежде чем обращаться на API получения/изменения профиля и получение списка заказов необходимо авторизоваться

API:  
/api/user/login  
POST-параметры:  
email - емейл пользователя  
password - пароль  

/api/user/logout  
/api/user/profile  
/api/user/profile/edit  
POST-параметры:  
name - имя пользователя  

/api/orders  
Формат успешного ответа API:

            {
                "success": true,
                "data": DataObject
            }
        
Формат неуспешного ответа API:

            {
                "success": false,
                "error": ErrorMessageString
            }
        
Тестовые учетки:
Логин: test@mail.test

Пароль: nNkZT.wNmrx16
_____________________

Логин: test2@mail.test

Пароль: 000000
