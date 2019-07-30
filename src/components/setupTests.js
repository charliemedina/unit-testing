import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

global.l = { t : jest.fn().mockImplementation(n => `t(${n})`) };

window.scrollTo = jest.fn();

window.google ={
    maps:{
        Marker:class{},
        Map:class{ },
        LatLngBounds:class{},
        places:{
            Autocomplete: class {setFields(){} addListener(){}},
            AutocompleteService:class{},
            PlacesServiceStatus: {
                INVALID_REQUEST: 'INVALID_REQUEST',
                NOT_FOUND: 'NOT_FOUND',
                OK: 'OK',
                OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
                REQUEST_DENIED: 'REQUEST_DENIED',
                UNKNOWN_ERROR: 'UNKNOWN_ERROR',
                ZERO_RESULTS: 'ZERO_RESULTS',
            },
            PlacesAutocomplete:{
                INVALID_REQUEST: 'INVALID_REQUEST',
                NOT_FOUND: 'NOT_FOUND',
                OK: 'OK',
                OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
                REQUEST_DENIED: 'REQUEST_DENIED',
                UNKNOWN_ERROR: 'UNKNOWN_ERROR',
                ZERO_RESULTS: 'ZERO_RESULTS',
            }
        },

        MarkerClusterer:class{},
        Geocoder:class{},
    }
};