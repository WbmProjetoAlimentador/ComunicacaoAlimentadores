# Detalhes da API

## Adição do IP via Postman

1. Rode o Backend
```
node app.js
```
2. Faça o Post no Postman no endpoint:
```
http://localhost:3000/moduloMestre/ip
``` 
Passe o IP do módulo mestre no body raw seguindo esse exemplo de JSON
```
{
    "ip": "192.168.0.240"
}
```
3. A resposta da requisição deve ser:
```
{
    "sucess": true,
    "message": "IP atualizado com sucesso",
    "ip": "192.168.0.240"
}
```



## WebSocket endpoint

### Endpoint do Alimentador
```
ws://localhost:3000/alimentador/1
```
```
 "data": {
        "alimentador": {
            "id": 1,
            "horaLiga": 0,
            "horaDesliga": 0,
            "setPoint": 0,
            "tempoCiclo": 0,
            "temperatura": 0,
            "erro": 0,
            "posicao": 0,
            "hora": 0,
            "minuto": 0,
            "ciclos": 0,
            "quantReservatorio": 0
        },
        "erros": {
            "qtdErro1": 0,
            "qtdErro2": 0,
            "qtdErro3": 0,
            "qtdErro4": 0,
            "qtdErro5": 0,
            "qtdErro6": 0,
            "qtdErro7": 0,
            "comErro1": 0,
            "comErro2": 0,
            "comErro3": 0,
            "comErro4": 0,
            "comErro5": 0,
            "comErro6": 0,
            "comErro7": 0
        },
        "monitor": {
            "umidade": 0,
            "temperatura": 0
        },
        "timetamp": "2025-08-07T16:41:06.584Z"
    }
}
```
### Endopoint para mandar comando
```
http://localhost:3000/moduloMestre/alimentador
```
### Body
```
{
    "id": 1,
    "horaLiga": 9,
    "horaDesliga": 19,
    "setpoint":50,
    "tempoCiclo": 10
}
```
### Resposta
```
{
    "success": true,
    "message": "Enviado com Sucesso!",
    "data": {
        "campos": {
            "id": 1,
            "horaLiga": 9,
            "horaDesliga": 19,
            "setpoint": 50,
            "tempoCiclo": 10
        }
    }
}
```
