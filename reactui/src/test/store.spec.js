import configureStore from '../js/store/configureStore';


describe('Store Initial State', function() {
    
    let store = configureStore();

    it('store is defined', function() {
      expect(store.getState()).toBeDefined();
    });
   
});
