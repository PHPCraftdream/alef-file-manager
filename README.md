# Alef File Manager

Файловый менеджер — приложение для [Alef runtime](https://github.com/PHPCraftdream/alef-runtime). Страница на React,
TypeScript и Tailwind работает внутри встроенного Servo и ходит к системе через `@alef-runtime/api`:
каталог читает модуль `fs`, язык интерфейса (ru, en, he с RTL) хранит `store`, заголовок окна и его состояние ведёт `window`.
Манифест — `alef.ktav` (id `org.alef.filemanager`): чтение разрешено только в `$HOME/**`, запись, сеть и команды закрыты.

Репозиторий — обычное приложение Alef, устроенное как проект из `npm create alef-runtime`: манифест и `icon.png` лежат
в корне, веб-ресурсы собираются в `dist`, команды `dev`, `build` и `pack` даёт `@alef-runtime/tools`.

## Состояние

Приложение перенесено из репозитория runtime (прежнее имя AlefFileManager) одним коммитом, без истории; источник —
коммит `d94f625` репозитория alef-runtime. Пакеты `@alef-runtime/api`, `@alef-runtime/tools` и
`@alef-runtime/runtime` ещё не опубликованы в npm, поэтому `npm install` здесь заработает после первого релиза runtime.
Тесты страницы (обёртка `src/native/api.ts` поверх поддельного runtime) и CI не переносились: они опирались на исходники
пакета `api` и на e2e-обвязку из репозитория runtime и вернутся, когда пакеты будут опубликованы.

## Работа

Нужен Node.js >= 22.12.0. После публикации пакетов:

```sh
npm install
npm run dev          # сервер Rsbuild на 127.0.0.1:3000
npx alef-runtime dev # запускает сервер и окно runtime
npm run typecheck
npm run lint
npx alef-runtime build   # каталог приложения: манифест, иконка, ресурсы
npx alef-runtime pack --key <имя ключа>   # пакет .alef
```

Окно открывает runtime (`alef`, пакет `@alef-runtime/runtime`): `alef run <пакет.alef>` или
`npx alef-runtime bundle <пакет.alef> --platform <платформа>`, когда нужен установщик с runtime внутри.

## Лицензия

MIT OR Apache-2.0, тексты в `LICENSE-MIT` и `LICENSE-APACHE`.
