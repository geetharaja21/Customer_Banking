//import { browser, element } from "protractor";

let winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: './reports/winstonBasicLog.log' })
    ]
  });



describe('Banking App HomePage',function(){

    beforeEach(function(){

        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage().window().maximize();
        browser.sleep(4000);
    });
    afterEach(function(){
        console.log('Test case Executed');
        logger.info('Testcase executed');
    });
    //testcases
    // it('Login Page',function(){
    //    console.log('Login page displayed successfully');
    // });

    //Verify Currency Type

    it('Verify Currency Type',async function(){

       await element(by.buttonText('Customer Login')).click();
       await element(by.model('custId')).click();
       await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        //browser.sleep(3000);
        await element(by.buttonText('Login')).click();
        //browser.sleep(3000);
        element.all(by.options('account for account in Accounts')).then(function(items){
           items[1].click();
        });
        // var currency=element(by.binding('Currency')).getText();
        // expect(currency).toEqual('Pound');
        //browser.sleep(2000);
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        browser.sleep(2000);
     });

     //Intial Transaction
     it('Initial Transaction',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
       // browser.sleep(2000);
       await element(by.buttonText('Login')).click();
       await element(by.partialButtonText('Transactions')).click();
        browser.sleep(2000);
     });

     //Deposit Money
     it('Deposit Money',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        //browser.sleep(2000);
        await element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        browser.sleep(2000);
        await element(by.partialButtonText('Deposit')).click();
        //browser.sleep(2000);
        await element(by.model('amount')).sendKeys('2000');
        await element(by.xpath("//button[@class='btn btn-default']")).click();
        browser.sleep(2000);

     });

     //TransactionAfterDeposit
     it('TransactionAfterDeposit',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
       // browser.sleep(2000);
       await element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        //browser.sleep(2000);
        await element(by.partialButtonText('Transactions')).click();
        browser.sleep(2000);
     });

     //withDrawError
     it('withDrawError',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        browser.sleep(2000);
        await element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        browser.sleep(2000);
        await element(by.partialButtonText('Withdrawl')).click();
        await element(by.model('amount')).sendKeys('2001');
        //browser.sleep(2000);
        await element(by.buttonText('Withdraw')).click();
        browser.sleep(3000);
     });

     //withDrawSuccess
     it('withDrawSuccess',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        browser.sleep(2000);
        await element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        browser.sleep(2000);
        await element(by.partialButtonText('Withdrawl')).click();
        await element(by.model('amount')).sendKeys('1000');
        //browser.sleep(2000);
        await element(by.buttonText('Withdraw')).click();
        browser.sleep(3000);
     });

     //Transaction after withdraw
     it('TransactionAfterWithdraw',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        //browser.sleep(2000);
        await element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        browser.sleep(2000);
        await element(by.partialButtonText('Transactions')).click();
        browser.sleep(4000);
     });

     //Transaction Reset
     it('TransactionReset',async function(){
        await element(by.buttonText('Customer Login')).click();
        await element(by.model('custId')).click();
        await element(by.xpath("//option[contains(text(),'Harry Potter')]")).click();
        //browser.sleep(2000);
        element(by.buttonText('Login')).click();
        element.all(by.options('account for account in Accounts')).then(function(items){
            items[2].click();
        });
        //browser.sleep(2000);
        await element(by.partialButtonText('Transactions')).click();
        await element(by.partialButtonText('Reset')).click();
     });
});