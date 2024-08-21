const listBikes = [
    {
        brand: 'bmw',
        cc: '1000',
        model: '2022'
    },
    {
        brand: 'ktm',
        cc: '1290',
        model: '2020'
    }
];

type Ibike = {
    brand: string,
    cc: string,
    model: string
}

type Ibikes = Ibike[];

type IactionBike = {
    state: Ibike,
    payload: '[BIKE] add bike' 
}



const bikeReducer = (state = listBikes, action?:IactionBike ):Ibikes => {

    if(state && action?.payload == '[BIKE] add bike'){
        return [...state, action.state];
    }

    return state;
}



let callReducer = bikeReducer();

console.log(callReducer);


callReducer = bikeReducer(listBikes, { 
    state: {
        brand: 'yamaha',
        cc: '600',
        model: '2024'
    },
    payload: '[BIKE] add bike'
 });

 console.log(callReducer);

