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
{
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
            "quantCiclos": 0,
            "quantReservatorio": 0,
            "modo": 0
        },
        "monitor": {
            "umidade": 0,
            "temperatura": 0
        },
        "timetamp": "2025-08-22T14:59:26.792Z"
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
        "horaLiga": 0,
        "horaDesliga": 0,
        "setPoint": 0,
        "tempoCiclo": 0,
        "temperatura": 0,
        "erro": 0,
        "posicao": 0,
        "hora": 0,
        "minuto": 0,
        "quantCiclos": 0,
        "quantReservatorio": 0,
        "modo": 0
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
### Corpo
```
{
    "id":1,
    "horaLiga": 9,
    "horaDesliga": 18,
    "setPointAutomatico": 50,
    "tempoCiclo": 120,
    "modo": 1
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
            "horaDesliga": 18,
            "setPointAutomatico": 50,
            "tempoCiclo": 120,
            "modo": 1
        }
    }
}
```
### Endpoint para mandar comando (manual)
```
http://localhost:3000/moduloMestre/alimentador
```
### Corpo
```
{
    "id":1,
    "modo": 2,
    "setPointManual": 100
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
            "modo": 2,
            "setPointManual": 100
        }
    }
}
```

# Legendas de Erros
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
