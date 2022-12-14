import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext';
import Landing from './components/auth/Landing';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ExamContextProvider from './contexts/ExamContext';
import TestForm from './components/Content/ExamForm';
import History from './components/me/History'
import Info from './components/me/Info'
import NotFound from './components/Content/NotFound';
import Rank from './components/Content/Rank';
import Admin from './components/admin/Admin';
import ProtectedAdmin from './components/auth/ProtectedAdmin';
import Exams from './components/admin/Exams';
import Users from './components/admin/Users';
import AdminContextProvider from './contexts/AdminContext';
import UpdateExam from './components/admin/UpdateExam';
import { MathJaxContext } from 'better-react-mathjax'
import LayoutRoute from './components/auth/LayoutRoute';
import ExamContext from './components/Content/ExamContent';
import MyRank from './components/me/MyRank';
import CreateExam from './components/admin/CreateExam';
import TrialExam from './components/Content/TrialExam';
import UserContextProvider from './contexts/UserContext';

function App() {  
  return (
    <AuthContextProvider>
      <AdminContextProvider>
        <UserContextProvider>
          <MathJaxContext>
            <ExamContextProvider>
              <Router>
                <Routes>
                  <Route path='/' element={<Landing/>} />
                  <Route path='/login' element={<Auth authRoute='login'/>} />
                  <Route path='/register' element={<Auth authRoute='register'/>} />
                  <Route path='/home' element={<LayoutRoute Component={Home}/>}/>
                  <Route path='/admin' element={<ProtectedAdmin Component={Admin} flag='no-nav'/>}/>
                  <Route path='/admin/exams-management/view/:slug' element={<ProtectedAdmin Component={UpdateExam} flag='no-nav'/>}/>
                  <Route path='/admin/exams-management/create/:slug' element={<ProtectedAdmin Component={CreateExam} flag='no-nav'/>}/>
                  <Route path='/admin/exams-management' element={<ProtectedAdmin Component={Exams} />}/>
                  <Route path='/admin/users-management' element={<ProtectedAdmin Component={Users} />}/>
                  <Route path='/exams' element={<LayoutRoute Component={ExamContext}/>} />
                  <Route path='/exams/try/:slug' element={<LayoutRoute Component={TrialExam} flag='no-nav'/>} />
                  <Route path='/exams/:slug' element={<ProtectedRoute Component={TestForm} flag='no-nav' />} />
                  <Route path='/me/history' element={<ProtectedRoute Component={History} />} />
                  <Route path='/me/info' element={<ProtectedRoute Component={Info} flag='no-nav'/>} />
                  <Route path='*' element={<NotFound />}></Route>
                </Routes>
              </Router>
            </ExamContextProvider>
          </MathJaxContext>
        </UserContextProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  )
}

export default App;
