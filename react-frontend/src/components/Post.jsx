import { Separator } from '@/components/ui/separator'

const Post = ({ heading='', img='', date='', likes=0, user={}}) => {
    const datetimestamp = new Date(date);
    const datestring = datetimestamp.toDateString();
    // the datestring is in the format of "Mon Aug 23 2021"

    return(
        <div className=" w-full flex flex-col px-2 md:px-8 ">
            <Separator className='bg-gray-500 bg-opacity-30 mb-1' />
            <div className='px-3 md:px-4'>
                <CardDateAvatar date={datestring} user={user}/>
                <CardHeading heading={heading}/>
                <CardImg img={img}/>
                <CardBottom likes={likes} />
            </div>
        </div>

    )
}

const CardDateAvatar = ({date, user}) => {
    return(
        <div className="w-full h-[5%] flex items-center mb-2 mt-1 ">
            <div className='flex space-x-2 items-center font-inter'>
                <img src={user.avatar} alt="UN" className="h-6 w-6 rounded-full bg-slate-800 text-sm text-white"/>
                <p className="text-xs font-bold text-[#B3B3B3]">{`u/${user.username}`}</p>
                {/* add a small center dot  */}
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <p className="text-xs font-light text-gray-400 text-opacity-70">{date}</p>
            </div>
            <div className="ml-auto mr-2 rounded-3xl p-1 hover:bg-gray-500 hover:bg-opacity-50">
                <svg className="text-[#B3B3B3] " xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </div>
        </div>

    )
}

const CardHeading = ({heading}) => {
    return(
        <div className='w-full flex items-center font-inter'>
            <p className='text-lg font-semibold text-gray-100 '>{heading}</p>
        </div>
    )
}


const CardImg = ({ img }) => {
    return (
      <div
        className="flex rounded-3xl justify-center items-center max-h-[85vh] overflow-hidden bg-[#1a1a1a] border border-gray-500 border-opacity-20 w-full mt-1"
      >
        <img
          src={img}
          alt="Post Image"
          className="opacity-70 max-w-full max-h-full object-contain"
        />
      </div>
    );
};

const CardBottom = ({likes}) =>{
    return(
        <div className='w-full flex space-x-2 items-center mt-2 mb-10'>
            {/* Like Button */}
            <div className='rounded-3xl flex justify-between bg-neutral-400 bg-opacity-40'>
                <div className='p-1 rounded-full text-gray-100 hover:text-blue-400 hover:bg-neutral-500 bg-opacity-50'>
                    <svg className="w-[16px] h-[16px] md:w-[21px] md:h-[21px]  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
                    </svg>
                </div>
                <p className='text-xs my-auto text-gray-100 dark:text-white'>{likes}</p>
                <div className='p-1 rounded-full text-gray-100 hover:text-red-400 hover:bg-neutral-500 bg-opacity-50'>
                    <svg className="w-[16px] h-[16px] md:w-[21px] md:h-[21px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                    </svg>
                </div>
            </div>

            {/* Share Button */}
            <div className='rounded-3xl flex justify-between space-x-1 px-2 py-1 bg-neutral-400 bg-opacity-40 hover:bg-opacity-60'>
                <div className=' rounded-full text-gray-100'>
                    <svg className="w-[16px] h-[16px] md:w-[21px] md:h-[21px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m15.141 6 5.518 4.95a1.05 1.05 0 0 1 0 1.549l-5.612 5.088m-6.154-3.214v1.615a.95.95 0 0 0 1.525.845l5.108-4.251a1.1 1.1 0 0 0 0-1.646l-5.108-4.251a.95.95 0 0 0-1.525.846v1.7c-3.312 0-6 2.979-6 6.654v1.329a.7.7 0 0 0 1.344.353 5.174 5.174 0 0 1 4.652-3.191l.004-.003Z"/>
                    </svg>
                </div>
                <p className='text-xs my-auto text-gray-100 dark:text-white'>Share</p>
            </div>
        </div>
    )
}

export default Post;