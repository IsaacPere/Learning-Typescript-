  //Basic types 
  let organizational_id : number = 45
  let company_name : string = "Isaac Pere"
  let the_list_published : boolean = true

  //typescript has a basic types which is called any
  let unkown_variable: any = "Hello"

  //you can also intialzed in typescript
  let workers_age : number
  workers_age = 100

  //intialize an array variable
  let the_list_id : number[] = [1, 2, 3, 4, 5]
  let array_is : any[] = [1, true, 'Hello']


  //Tuple
  let person_details_list: [number, string, boolean] = [1, "Brad", true]

  //You can also put turple in an array
  let emplyoee_details : [number, string] []

  emplyoee_details = [
    [1, "Isaac"],
    [2, "Pere"],
    [3, "Michael"],
  ]

  //unions in typescript
  let products_id: string | number
  products_id = "22"


  //enums 
  enum direction_1 {
    Up = 0,
    Down,
    Left,
    Right,
  }

  console.log(direction_1)


  //when describing objects we will have describing the types
  type user_information = {
    factory_employess_id_number : number
    factory_employess_name : string
  }

  const and_the_user: user_information = {
    factory_employess_id_number:1,
    factory_employess_name: 'John',
  }

   //we can type assert in two ways

   //way number one
   let customers_id: any = 1
   let today_customers_id = customers_id as number

   //by stating that the variable customers_id as "number" then you type aseet 
   let customers_id_2: any = 2
   let yesterday_customers_id = customers_id as number 


   //functions typescript
   function add_the_numbers(first_number: number, second_number: number): number {
    return first_number + second_number
   }
   function logging_the_answeer(message: String | number): void {
    console.log(message)
   }

   //interfaces
   interface user_interface {
    number_id : number
    and_the_name : string
   }

   const user_one: user_interface = {
    number_id: 1,
    and_the_name: 'John'
   }


   //you can have readonly properties in an objects
   interface weather_details {
    readonly city_id: number
    name:string
    age?:number
   }

   //clasees and interface in typescript

   class and_the_person {
    //classes are normal asscoiated with object
    the_id_number_details: number
    the_name_details: string
    constructor(the_id_number_details: number, the_name_details: string) {
        this.the_id_number_details = the_id_number_details
        this.the_name_details = the_name_details
    }
   }

   const guess_the_person = new and_the_person(1, "Daddy Good")
   console.log(guess_the_person)


   // in classes you can specify whether 
   //you would want to have public, private or protected objects