
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }


    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
            <button onClick={handlePrevPage} disabled={page == 1}
                style={{
                    //glassmorphism
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 100, 0.69 )',
                    backdropFilter: 'blur(10px)',
                }}
                className="bg-color-oceandark py-2 px-2 rounded-lg transition-all">
                <MdOutlineNavigateBefore className='text-white' />
            </button>

            <p>{page} of {lastPage}</p>

            <button onClick={handleNextPage}
                tyle={{
                    //glassmorphism
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 100, 0.69 )',
                    backdropFilter: 'blur(10px)',
                }}
                className="bg-color-oceandark py-2 px-2 rounded-lg transition-all">
                <MdOutlineNavigateNext className='text-white' />
            </button>
        </div>
    )
}

export default Pagination