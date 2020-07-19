---
title: mysql-in-asp.net.core
lang: en-US
---
# How to Connect MySql in ASP.Net Core 3
---
Normally, we choose **SQL Server** when we develop ASP.NET Core project
, but MySQL is also a good choice for individual developer to
study ASP.NET Core and develop small project.

Let's have a look at how to use **Entity Framework Core** in ASP.NET Core 3
with **MariaDB(MySsql)**.

#### 1. Installing Entity Framework Core Packages for MySql
```
dotnet add package Pomelo.EntityFrameworkCore.MySql

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Relational
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

#### 2. Defining the Connection String
We need to add a configuration setting in the `appsettings.json` file.
``` json {10,11,12}
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "SportsStoreConnection": "Server=127.0.0.1;Port=3306;User Id=****;Password=*******;Database=SportsStore;"
  }
}
```

#### 3. Creating the Database Conetxt Class
Entity Framework Core provides access to the database throught a context class. Add a class file named S`toreDbContext.cs` to the `Models` folder,

```csharp
using Microsoft.EntityFrameworkCore;

namespace SportsStore.Models {
    public class StoreDbContext: DbContext {
        public StoreDbContext(DbContextOptions<StoreDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }
    }
}
```

#### 4.Configuring Entity Framework Core
Entity Framework Core must be configured in `Startup.cs` so that it knows the type of database to which it will connect, which connection string describes the 
connection, and which context class will present the data in the database.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using SportsStore.Models;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

namespace SportsStore
{
    public class Startup
    {
        public Startup(IConfiguration config) {
            Configuration = config;
        }
        private IConfiguration Configuration { get; set; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddDbContext<StoreDbContext>(opts => {
               opts.UseMySql(
                   Configuration["ConnectionStrings:SportsStoreConnection"],
                   mysqlOptions => {
                       mysqlOptions.ServerVersion(new Version(10, 4, 8), ServerType.MySql)
                   }
               ); 
            });
            services.AddScoped<IStoreRepository, EFStoreRepository> ();
        }
        ...
    }
}
```
::: tip 
Please set the `new Version(10, 4, 8)` accroding to your MariaDB(MySQL) version.
:::

After the previous operations, we can successfully connect the ASP.NET Core 
project to the mysql dababase and use **Entity Framework Core** as we want.