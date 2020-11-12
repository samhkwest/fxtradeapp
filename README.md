# A simple ReactJs App for data display of Fx Trades 

## How to use

**1. Download sources**

```sh
In your working folder, run this command:

git clone https://github.com/samhkwest/fxtradeapp
```

**2. Install Dependencies**

```sh
npm install
```
**3. Start application**

```sh
npm start
```
**Remark**

Since this is a app to display data only and there is a single button to refresh the page,
react-redux and react-saga are not used for handling state management and side effects.

## How to test

**1. Run the fxtradeapi**

```sh
Run the RESTFul API controller fxtradeapi in localhost (refer to https://github.com/samhkwest/fxtradeapi).

```
**2. Run fxtradeapp**

```sh
When fxtradeapp is loaded in browser (default browser is Chrome), a table of Fx trades are shown.
```

**3. Test the app**

```sh
Use Postman to send POST fxtrade message to the controller, and then click the button "Refresh" to check the newly added Fx trade record.

```


