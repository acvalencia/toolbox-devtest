<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/acvalencia/toolbox-devtest">
    <img src="images/logo.jpg" alt="Logo" height="80">
  </a>
  <h3 align="center">Toolbox FullStack Dev Test</h3>
</div>

## About The Project

[![Product Name Screen Shot][product-screenshot1]](https://github.com/acvalencia/toolbox-devtest)

[![Product Name Screen Shot][product-screenshot4]](https://github.com/acvalencia/toolbox-devtest)

## Getting Started

1. Clone the project

```bash
git clone https://github.com/acvalencia/toolbox-devtest
```

## Run project using Docker

In the root of the project run the following command

```bash
docker-compose up --build
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see API the result. List of endpoints

* [http://localhost:3001/files/data](http://localhost:3001/files/data)
* [http://localhost:3001/files/data?fileName=test5.csv](http://localhost:3001/files/data?fileName=test5.csv)
* [http://localhost:3001/files/list](http://localhost:3001/files/list)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the React client. List of endpoints

* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/list](http://localhost:3000/list)
* [http://localhost:3000?fileName=test2.csv](http://localhost:3000?fileName=test2.csv)
tarbn
## Start Node Express project

1. In the root of the project go to the ``server`` folder

```bash
cd server
```

2. Use or active the version 14 of node (with nvm)

```bash
nvm on
nvm use 14.x.x
```

3. Install packages
```bash
npm install
```

4. Run server
```bash
npm start
```
[![Product Name Screen Shot][product-screenshot2]](https://github.com/acvalencia/toolbox-devtest)
[![Product Name Screen Shot][product-screenshot3]](https://github.com/acvalencia/toolbox-devtest)
5. Run test suite

```bash
npm test
```
[![Product Name Screen Shot][product-screenshot7]](https://github.com/acvalencia/toolbox-devtest)

## Start React Client Project

1. In the root of the project go to the ``client`` folder

```bash
cd client
```

2. Use or active the version 16 of node (with nvm)

```bash
nvm on
nvm use 16x.x
```

3. Install packages
```bash
npm install
```

4. Run server
```bash
npm start
```
[![Product Name Screen Shot][product-screenshot5]](https://github.com/acvalencia/toolbox-devtest)
[![Product Name Screen Shot][product-screenshot6]](https://github.com/acvalencia/toolbox-devtest)

[product-screenshot1]: images/1.PNG
[product-screenshot2]: images/2.PNG
[product-screenshot3]: images/3.PNG
[product-screenshot4]: images/4.PNG
[product-screenshot5]: images/5.PNG
[product-screenshot6]: images/6.PNG
[product-screenshot7]: images/7.PNG
