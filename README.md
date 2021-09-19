# Сфетафор на vue.js

### Эмуляция работы светафора на vue.js
- Красный горит 10 секунд **/red**
- Желтый 3 секунды **/yellow**
- Зеленый 15 секунд **/green**

### Особенности
- При перезагрузке страницы время сохраняется
- Можно начать с любого цвета и светафор отработает правильно
- При смене страницы время перезаписывается
- Сфетафор мигает когда остается меньше 3х секунд
- При смене сигнала меняется роут (адрес в адресной строке).
- Собирается с помощью webpack
- Таймер показывает вреся до смены сигнала

## Установка
```
npm install
```

### Запуск проекта
```
npm run start
```
