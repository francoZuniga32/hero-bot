# HERO bot
bot de telegram, de notificacion de incidentes cuyo proposito es automatizar la notificacion a una persona en especifico, por lo que tenemos en cuanta la caracteristica de las rotaciones.

## Rotaciones
En este bot registramos a los usuarios que seran los heros, ademas de seleccionar un grupo como medio por el cual realizar alertas, mas adelante veremos como hacer que un bot se comunique con otro.

### Heros
Los heros son personas que estan de guardias, las guardias son formas de que una persona este disponible para resolver problemas de otros empleados, o resuelva problemas de infrastructura de la empresa. Es por esto que se les dice hero (heroes) ya que salvan el dia :).

### Rotaciones
Las rotaciones son forma de que un grupo de heros alternen sus guardias. De forma que no siempre uno es el que este de guardia (salvo que se el unico empleado) y que el resto de heros o personal de informatica pueden realizar sus tareas sin la preocupacion de que lo van a interrumpir.
Con el bot el resto de empleados no tiene que saber quien esta de guardia esta semana, sino que esto es invisible para ellos, de forma que quien realmente sabe quien esta de guardia es el bot, asi que sabe a quien notificar.

### Solucion
La solucion es lo siguiente:
- Un hero se registra comunicandose con el bot por privado para poder registrar su nombre y el chat pribado para notificar.
- Se agrega el bot a un grupo y se registra ese grupo como el grupo donde se solicitaran los pedidos de las personas. Tambien se pueden comunicar por privado con el bot.
- Cuando se registra un incidente se crea un issue en un repo asignado y se manda un mensaje a el hero de la semana.


# Intalacion
Se puede clonar este repositorio y en su servidor tendra que tener instalado mysql, para poder registrar a los heros necesitaras y tener un archivo de configuracion llamado kays.json, con la siguiente estructura:

**kays.js** 

```json
{
    "database": {
        "host"  :   "localhost",
        "user"  :   "usuario",
        "password"  :   "contraseña",
        "database"  :   "hero"
    }
}
```

te dejare el sql para descargar.

Luego de esto clonamos el repositorio y ejecutamos el comando para poder instalar las dependencias `npm install` de esta forma tenemos las dependencias instaladas, el archivo de configuracion de la base de datos solo nos falta los token y el nombre del repositorio. por lo que vamos a tener un archivo de configuracion donde vamos a colocar estos datos.

**configuracion.json** 

``` json
{
    "telegram" : "",
    "github" : "",
    "repositorio" : "francoZuniga32/hero-bot"
}
```

con esto podra comunicar a su bot con telegram y a la api de github. 

