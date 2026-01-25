import { ClipLoader } from 'react-spinners';

// export function StartSkeleton() {
//     return (
//         <section className="start">
//             <div className="sk sk-title" />
//             <div className="sk sk-text" />

//             <div className="actions">
//                 <div className="sk sk-btn" />
//                 <div className="sk sk-btn secondary" />
//             </div>
//         </section>
//     );
// }

export function StartSkeleton({ isLoading }: { isLoading?: any }) {
    return (
        <section className="start-section" aria-labelledby="start-title">
            <div className="start-container">
                <div className="start-box">
                    <p></p>
                    <div className="start-actions">
                        <div className="btn btn-primary">
                            {isLoading && <ClipLoader color="#ffffff" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
