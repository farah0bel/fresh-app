import { createHashRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Vision } from './pages/Vision';
import { Chat } from './pages/Chat';
import { Plan } from './pages/Plan';
import { List } from './pages/List';
import { Profile } from './pages/Profile';
import { RecipeDetail } from './pages/RecipeDetail';
import { SignIn } from './pages/SignIn';
import { LogosDemo } from './pages/LogosDemo';

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'search', Component: Search },
      { path: 'vision', Component: Vision },
      { path: 'chat', Component: Chat },
      { path: 'plan', Component: Plan },
      { path: 'list', Component: List },
      { path: 'profile', Component: Profile },
      { path: 'recipe/:id', Component: RecipeDetail },
      { path: 'sign-in', Component: SignIn },
      { path: 'logos-demo', Component: LogosDemo },
    ],
  },
]);