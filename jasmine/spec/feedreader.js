/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against my application.
 */


$(function() {
    
    // Test suite named "RSS Feeds" .
    describe('RSS Feeds', function() {
       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*--------------------------------------------------- 
         * Test to ensure RSS URL is defined and not empty 
         *---------------------------------------------------
         */
       it('Has a URL defined & the URLs are not empty',function(){
        allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
        });
       });
         /*--------------------------------------------------- 
         * Test to ensure RSS name is defined and not empty 
         *---------------------------------------------------
         */
        
         it('Has name defined & the name is not empty',function(){
        allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
        });
      });
    });


    // Test suite named "The menu" 
    describe('The menu', function() {
    
        /*--------------------------------------------------------
         * Test to ensure the menu element is hidden by default.
         *--------------------------------------------------------
         */
        it('is it hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

         /*----------------------------------------------------------------------------
          * Test to ensure the menu changes visibility when the menu icon is clicked.
          *----------------------------------------------------------------------------
          */
        it('changes visibility', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    // Test suite named "Initial Entries" .
    describe('Initial Entries', function() {

        /*-------------------------------------------------------------------------------
         * Test to ensure when the loadFeed function is called and completes its work, 
         * and there is at least a single .entry element within the .feed container.
         *-------------------------------------------------------------------------------
         */
         beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
         });
         it('entry not empty',function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
     });

    // Test suite named "New Feed Selection" . 
    describe('New Feed Selection',function(){
        
        /*-------------------------------------------------------------------------------------------------------
         * Test to ensure when a new feed is loaded by the loadFeed function that the content actually changes.
         *-------------------------------------------------------------------------------------------------------
         */
         beforeEach(function(done){
            loadFeed(0,function(){
            let oldFeed =$('.feed').length;
            done();
            });
         });
         it('new feed is different from old feed',function() {
            loadFeed(1,function(){
            let newFeed =$('.feed').length;
            expect(newFeed).toBeGreaterThan(oldFeed);
        });
      });
    });
}());  
