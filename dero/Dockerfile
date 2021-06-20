# docker build -t app . && docker run -it --init -p 3000:3000 app
FROM denoland/deno:1.11.0

EXPOSE 3000

WORKDIR /app

COPY . . 
RUN deno cache app.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-plugin", "app.ts"]