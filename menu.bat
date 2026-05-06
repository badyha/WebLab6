@echo off
chcp 65001 >nul
color 0B
title React Projects - Меню

:menu
cls
echo.
echo ╔════════════════════════════════════════╗
echo ║      REACT.JS PROJECTS - МЕНЮ         ║
echo ╚════════════════════════════════════════╝
echo.
echo 1 - Hello World (Порт 5173)
echo 2 - Recipe App (Порт 5174)
echo 3 - Встановити залежності обидва
echo 4 - Видалити node_modules обидва
echo 5 - Вихід
echo.
set /p choice="Виберіть опцію (1-5): "

if "%choice%"=="1" (
    echo.
    echo Запуск Hello World...
    cd hello-world
    if not exist node_modules npm install
    npm run dev
    cd ..
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo Запуск Recipe App...
    cd recipe-app
    if not exist node_modules npm install
    npm run dev
    cd ..
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo Встановлення залежностей Hello World...
    cd hello-world
    call npm install
    cd ..
    echo.
    echo Встановлення залежностей Recipe App...
    cd recipe-app
    call npm install
    cd ..
    echo.
    echo ✓ Готово!
    pause
    goto menu
)

if "%choice%"=="4" (
    echo.
    if exist hello-world\node_modules (
        echo Видалення hello-world\node_modules...
        rmdir /s /q hello-world\node_modules
    )
    if exist recipe-app\node_modules (
        echo Видалення recipe-app\node_modules...
        rmdir /s /q recipe-app\node_modules
    )
    echo ✓ Видалено!
    pause
    goto menu
)

if "%choice%"=="5" (
    exit
)

echo Невірна опція!
pause
goto menu
