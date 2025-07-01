import Header  from "../components/Header";
import SideBar from "../components/SideBar";


const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <SideBar />
               
            <main className="flex-1 flex flex-col overflow-hidden pt-6 px-9">
                <Header />
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
                
            </main>
        </div>
    );
};

export default Layout;