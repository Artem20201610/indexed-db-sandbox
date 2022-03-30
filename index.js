var db;
var request = window.indexedDB.open("Test", 6);

const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

request.onupgradeneeded = (event) => {
  let db = event.target.result;

  // let objectStore = db.createObjectStore('customers', { keyPath: 'ssn'});
  // objectStore.createIndex('name', 'name', {unique: false});
  // objectStore.createIndex('email', 'email', {unique: true});

  // objectStore.transaction.oncomplete = event => {
  //   let customerObjectStore = db.transaction('customers', 'readwrite').objectStore('customers');

  //   customerData.forEach(customer => {
  //     customerObjectStore.add(customer);
  //   });
  // };
};

request.onerror = (event) => {
  console.log("Not allowed");
};

request.onsuccess = (event) => {
  db = event.target.result;

  console.log(db);

  db.onerror = (event) => {
    console.error("DB error handler " + event.target.errorCode);
  };
};
