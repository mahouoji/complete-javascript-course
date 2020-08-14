// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';

import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app
//  - Search object
//  - Current recipe object
//  - Shopping list object
//  - Liked recipes
const state = {};


/// Search Controller ///
const controlSearch = async() => {
    // 1. Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2. Add new search object to state
        state.search = new Search(query);

        // 3. Prepare UI
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. render resuls on UI
            clearLoader();
            searchView.renderResults(state.search.result);
            //console.log(state.search.result);
        } catch(err) {
            console.log(err);
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// on page putton container
elements.searchResPages.addEventListener('click', e => {
    // maybe clicking on text/icon/... inside the button
    // .closest() get closest parent node (include self)
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});