import { ReactNode } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

interface IProps {
    leftPanel: ReactNode;
    rightPanel: ReactNode;
}

const ResizablePanel = ({ leftPanel, rightPanel }: IProps) => {
    // const isSmallScreen = useMediaQuery({ maxWidth: 768 });
    // const [rightSize, setRightSize] = useState<number>(80); // حجم الافتراضي للشاشة الكبيرة
    // const [leftSize, setLeftSize] = useState<number>(20); // حجم الافتراضي للشاشة الصغيرة

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (isSmallScreen) {
    //             setRightSize(90); // حجم الشاشة الصغيرة
    //             setLeftSize(10); // حجم الشاشة الصغيرة
    //         } else {
    //             setRightSize(80); // حجم الشاشة الكبيرة
    //             setLeftSize(20); // حجم الشاشة الصغيرة
    //         }
    //     };

    //     // استدعاء handleResize بشكل أولي وعند تغيير الحجم
    //     handleResize();

    //     // إضافة مستمع لتغيير حجم الشاشة
    //     window.addEventListener('resize', handleResize);

    //     // إزالة مستمع عندما يتم تفريغ المكون
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, [isSmallScreen]);

    // console.log({ rightSize, leftSize });

    return (
        <PanelGroup direction="horizontal">
            <Panel defaultSize={24} minSize={22 }>
                {leftPanel}
            </Panel>
            <PanelResizeHandle className='border-r-2  ' />
            <Panel defaultSize={76} minSize={ 60}>
                {rightPanel}
            </Panel>
        </PanelGroup>
    );
}

export default ResizablePanel;
