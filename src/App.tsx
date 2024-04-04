import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './shared/styles/index.scss'
import HomeScreen from './shared/screens/home'
import MethodScreen from './shared/screens/method'
import AntiquityScreen from './shared/screens/antiquity'
import SovietScreen from './shared/screens/soviet'
import FactsScreen from './shared/screens/facts'
import ChampionScreen from './shared/screens/champion'
import ItemsScreen from './shared/screens/items'
import LegendaryScreen from './shared/screens/legendary'
import CenturyScreen from './shared/screens/century'
import HistoryScreen from './shared/screens/history'
import FirstScreen from './shared/screens/first'
import InterestingScreen from './shared/screens/interesting'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/method' element={<MethodScreen />} />
                <Route path='/antiquity' element={<AntiquityScreen />} />
                <Route path='/soviet' element={<SovietScreen />} />
                <Route path='/facts' element={<FactsScreen />} />
                <Route path='/champion' element={<ChampionScreen />} />
                <Route path='/items' element={<ItemsScreen />} />
                <Route path='/legendary' element={<LegendaryScreen />} />
                <Route path='/century' element={<CenturyScreen />} />
                <Route path='/history' element={<HistoryScreen />} />
                <Route path='/first' element={<FirstScreen />} />
                <Route path='/interesting' element={<InterestingScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
