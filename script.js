const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'caeac0cc8fmshd1b5fa6080686fdp1b38d2jsnb347808046ef',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

fetch('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




// Outside of Form : Name
// Form 1 Event data 
    // location :
     
    // Venue Type
    // Event : music, comedy, family, sports
    // Output : list :
        //- Option 1: venue 1 based off of location>venuetype>event
        //- Option 2:  venue 2 based off of location>venuetype>event
        //- Option 3: venue 3 based off of location>venue type> event
        //select venue

    // Form 1 Results :
        // Result Event List :
            // Venue 1 INFO BUTTON (LINK)/ SELECT BUTTON
            // Venue 2 INFO BUTTON (LINK)/ SELECT BUTTON
            // Venue 3 INFO BUTTON (LINK)/ SELECT BUTTON
            // selected venue opens FORM 2 (food)

    // [Option Selected- From Form 1] (push location/zipcode of venue from Form 1)
        //Food form 2 : food type : chinese, thai, pizza, american
        // Output: List :
        // food option 1 : chinese 1 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
        // food option 2 : chinese 2 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
        // food option 3 : chinese 3 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
   
    // Selected Food option >>> venue+food combo details


            //    // Selected Food option >>>  DATE 1 ((venue+food combo details))
            // Submit : save date or rethink??
                // save date > saves combo to local storage
                // rethrink > restarts the form

    //Local Storage : Date Combo Results : List :
            // Date 1 : FORM 1 OUTPUT + FORM 2 OUTPUT
            // Date 2 :  FORM 1 OUTPUT + FORM 2 OUTPUT
            // Date 3 : FORM 1 OUTPUT + FORM 2 OUTPUT


