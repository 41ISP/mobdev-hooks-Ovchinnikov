import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PageActivity from './pages/Activity/Activity'
import PageBoard from './pages/Board/Board'
import PagePeople from './pages/People/People'
import PageSettings from './pages/Settings/Settings'
import { useState} from 'react'

function App() {
    const [page, setPage] = useState('board')

    const [collapsed,setCollapsed] = useState(false)
    return (
        <div className={`app-shell ${ collapsed ? "sidebar-collapsed" : ""} ` } id="appShell">
            <Sidebar page={page} setPage={setPage}/>
            <div className="app-main">
                <Header setCollapsed={setCollapsed} />

                <main className="page-area">
                    {page === "board" && <PageBoard />}
                    {page === "people" && <PagePeople />}
                    {page === "activity" && <PageActivity />}
                    {page === "settings" && <PageSettings />}
                </main>
            </div>
        </div>
    )
}

export default App
