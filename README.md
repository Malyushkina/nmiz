# Это проект рекомендательной системы для больных раком лёгких, в основе которго лежит нейросеть

Использованные технологии: Node.js, React.js, Next.js и Python  

Для того, чтобы развернуть проект в режиме разработки, необходимо сделать следующее:

1. Склонировать себе проект из репозитория GitHub  
2. Установить среду разработки node.js (версия начиная с 18.17)
3. Находясь в корневом каталоге проекта выполнить в терминале команду `npm i` - так установятся пакеты, необходимые для работы фронтенд части
4. Выполнить в терминале `npm run dev`, если получите ошибку - проверьте версию node.js с помощью команды `node -version`
5. Далее поднимаем python сервер:

- `cd flask-server` - переходим в папку flask-server
- `. venv/bin/activate` - активируем виртуальное окружение
- `cd ..` - поднимаемся в корневой каталог
- `python3 flask-server/server.py` -  запускаем сервер flask

6. В браузере переходим на страницу `localhost:3000`
