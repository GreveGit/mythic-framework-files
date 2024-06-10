![Logo](https://i.imgur.com/uv0El0Z.jpeg)

## Mythic Framework

# 🚧DISCLAIMER🚧
We do not own this framework, and we am simply trying to give it the support it deserves. The framework was originally built by Alzar & Dr Nick. Alzar has taken the liberty of releasing the framework, which you can find by following the [original repository](https://github.com/Alzar/mythic-framework) 

# Requirements 
| Packages          | Link                                                                |
| ----------------- | ------------------------------------------------------------------ |
| NodeJS | [Download Here](https://nodejs.org/en/download?text=+) |
| MongoDB | [Download Here](https://www.mongodb.com/try/download/community) (v6.0.5) |
| MariaDB | [Download Here](https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.12&os=windows&cpu=x86_64&pkg=msi&m=acorn) (v10.6.12)
| HeidiSQL | [Download Here](https://www.heidisql.com/download.php) (*can be installed via MariaDB)
  
# SQL Instaliation
Run the SQL provided in xaamp, the mongo will build itself as the server starts

# NOTE:
This will not work out of the box, you will need to make modifications to the base to replace the WebAPI calls with whatever authentication source you're wanting to do. 

## Using Admin

In the MongoDB Compass, inside of the "auth" database under users, find yourself (or whoever you want to give admin too) and add a new dataset under the groups array called either admin, owner, or staff. If you're already in the server, soft or hard relog to retrieve the new permissions.

To use the admin tool, run `/admin` or `/staff`.