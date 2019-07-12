FROM node

ENV LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TZ=America/Sao_Paulo

WORKDIR /restaurants-front

ENV PORT=5001

USER node

ENTRYPOINT ["/restaurants-front/docker/entrypoint.sh"]

CMD ["npm", "run", "start"]

