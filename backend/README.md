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
            "horaLiga": 8,
            "horaDesliga": 19,
            "setPoint": 50,
            "tempoCiclo": 120,
            "temperatura": 25,
            "erro": 0,
            "posicao": 50,
            "hora": 12,
            "minuto": 20,
            "ciclos": 120,
            "quantReservatorio": 2500
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
## Endpoit que ler todos os IDs:
```
ws://localhost:3000/todos
```

```
{
    "alimentador": {
        "id": 2, 
        "horaLiga": 13,
        "horaDesliga": 12,
        "setPoint": 121,
        "tempoCiclo": 57,
        "temperatura": 13,
        "erro": 3,
        "posicao": 46,
        "hora": 5,
        "minuto": 31,
        "ciclos": 110,
        "quantReservatorio": 1981
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
    }
}
```
### Endpoint para mandar comando (autómatico)
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
### Endpoint para mandar comando (manual)
```
http://localhost:3000/moduloMestre/alimentador
```
### Body
```
{
    "id": 1,
    "setpoint":100,
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
            "setpoint": 100,
        }
    }
}
```

# Legendas
```
1 - Motor não funciona
2 - Motor travou
3 - Alimentador vazio
4 - Tensão abaixo de 10v
5 - Sensor de temperatura com defeito
6 - Alimentador quase vazio
7 - Sem comunicação
8 - Setpoint tempo inconsistente
9 - Módulo RTC com defeito
```
