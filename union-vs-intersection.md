Title: Combinig Union and Intersection types in Typescript
Introduction: To create flexible and reusable data structure we can use Union(|) and Intersection(&). Union allows a values from different possible type. Where Intersection add multiple types into one type. 
Union: A union types allows a variable  to accept more than one type. 
Ex: let ID: string | number;
    ID: 100;
    ID: "id-100";
The ID can store either a number or a string. 
Intersection: It combine multiple type into one type. Like when a person enroll in a e-commarce system. At first he have to sign in with personal details and after when he order a product he has some product details. All kind of data of this person can combined with intersection. 
Ex: type person={
    name: string;
    age: number;
};
type product={
    product_name: string;
    product_price: number;
};
type staff= person & prodict;

This are very powerful Typescript feature that help developer daily activity more flexible, reuseable and readable. 