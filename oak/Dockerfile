# docker build -t app . && docker run -it --init -p 3000:3000 app
FROM hayd/alpine-deno:1.10.2

EXPOSE 3000

WORKDIR /app

COPY . . 
RUN deno cache --unstable server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "server.ts"]