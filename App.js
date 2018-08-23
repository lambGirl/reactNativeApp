import {
    createStackNavigator,
} from 'react-navigation';

import HomeScreen from './pages/HomeScreen'
import FlatListBasics from "./pages/FlatList"
import FetchData from './pages/fetchData'
import MovieDemo from './pages/movieDemo'
const App = createStackNavigator({
    Home: { screen: HomeScreen},
    FlatList:{screen: FlatListBasics},
    FetchData:{screen: FetchData},
    MovieDemo:{screen: MovieDemo},
});

export default App;
