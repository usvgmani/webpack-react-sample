import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ADashboard from '../js/components/ADashboard';

describe("dashboard", function() {

    var renderedComponent;

    var people = [
        { "name": "A",  "age": "016",  "sex": "F", "interests": "whisky","capable": "react with karma", "whendate":"today"},
        { "name": "B",  "age": "026",  "sex": "F", "interests": "brandy","capable": "react with karma", "whendate":"today"},
        { "name": "C",  "age": "036",  "sex": "F", "interests": "rum","capable": "react with karma", "whendate":"tomorrow"},
        { "name": "D",  "age": "046",  "sex": "F", "interests": "gin","capable": "react with karma", "whendate":"dayafter"},
        { "name": "E",  "age": "056",  "sex": "F", "interests": "vodka","capable": "react with karma", "whendate":"manyyears"},
    ]



    beforeEach(function() {
        renderedComponent = TestUtils.renderIntoDocument( <ADashboard peopledata= {people}/> );
    });


    it('renders the component', function() {
        expect(renderedComponent).toBeDefined();
    });

    it('has ' + (people.length + 2 ) + ' list items', function() {
        var liArr = TestUtils.scryRenderedDOMComponentsWithTag(
            renderedComponent,
            'tr'
        );
        expect(liArr.length).toEqual(people.length + 2)//including header and footer
    });

});
