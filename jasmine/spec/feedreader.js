/* feedreader.js
 *


/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    // Test Suite "RSS Feeds"
    describe('RSS Feeds', function () {

        //  Test: allFeeds variable has been defined and that it is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This test loops through each feed in the allFeeds object and ensures it has a 
        // URL defined and that the URL is not empty.

        it('URL defined and not emtpy', () => {
            allFeeds.forEach(element => {
                expect(element.url).not.toBeUndefined();
                expect(element.url.length).not.toBe(0);
                expect(element.url).toMatch("http");

            });

        });

        // This test loops through each feed in the allFeeds object and ensures it has a 
        // name defined and that the name is not empty.

        it('Name defined and not emtpy', () => {
            allFeeds.forEach(element => {
                expect(element.name).not.toBeUndefined();
                expect(element.name.length).not.toBe(0);

            });

        });


    });


    // Test suite "The menu" 

    describe('The menu', () => {


        // This test ensures the menu element is hidden by default.

        it('menu element is hidden by default', () => {

            expect(document.querySelector("body").classList.contains("menu-hidden")).toBe(true);


        });

         // This test ensures the menu changes visibility when the menu icon is clicked.

        it('menu changes to visible', () => {
            const menuIcon = document.getElementsByClassName('menu-icon-link')[0];

            menuIcon.click();
            expect(document.querySelector("body").classList.contains("menu-hidden")).toBe(false);
            menuIcon.click();
            expect(document.querySelector("body").classList.contains("menu-hidden")).toBe(true);
        });

    });



    // Test suite "Initial Entries"

    describe('Initial Entries', () => {

        // This test ensures when the loadFeed function is called and completes its work, 
        // there is at least a single .entry element within the .feed container.

        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            })

        });

        it('should loadfeed', (done) => {
            expect(document.getElementsByClassName("feed")[0].hasChildNodes()).toBe(true);
        
            done();
        });

    });



    // test suite "New Feed Selection"

    describe('New Feed Selection', () => {

        // This test ensures when a new feed is loaded by the loadFeed 
        // function that the content actually changes.

        let feedText0;
        let feedText1;

        beforeEach((done) => {
            loadFeed(0, () => {
                feedText0 = document.getElementsByClassName("feed")[0].textContent;
                loadFeed(1, () => {
                    feedText1 = document.getElementsByClassName("feed")[0].textContent;
                    done();
                })
            })

        });


        it('feed content actually changes', () => {
            expect(feedText0).not.toBe(feedText1);

        });



    });


}());