# Это проект рекомендательной системы для больных раком лёгких, в основе которого лежит нейросеть

Использованные технологии: Node.js, React.js, Next.js и Python  

Для того, чтобы развернуть проект в режиме разработки, необходимо сделать следующее:

1. Склонировать себе проект из репозитория GitHub  
2. Установить среду разработки node.js (версия начиная с 18.17)
3. Находясь в корневом каталоге проекта выполнить в терминале команду `npm i` - так установятся пакеты, необходимые для работы фронтенд части
4. Выполнить в терминале `npm run build` - собираем проект
5. Выполнить в терминале `npm run dev` - запускаем на локальном сервере, если получите ошибку - проверьте версию node.js с помощью команды `node -version`
6. Далее поднимаем python сервер:

- `cd flask-server` - переходим в папку flask-server
- `python3 -m venv venv` - создаём виртуальную среду
- `. venv/bin/activate` - активируем виртуальное окружение
  
  Устанавливаем необходимые пакеты:
- `pip install flask`
- `pip install -U flask-cors`  
- `pip install autokeras`
- `pip install tensorflow`
- `pip insatll numpy`
- `pip install pandas`
  
- `cd ..` - поднимаемся в корневой каталог
- `python3 flask-server/server.py` -  запускаем сервер flask

1. В браузере переходим на страницу `localhost:3000`
