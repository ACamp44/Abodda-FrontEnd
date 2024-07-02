import './bigbar.css'
import Business1 from '../assets/business1.png'
import Business2 from '../assets/business2.png'

function BigBar(props) {
    return (
        <div id='big_section'>
            <div id='big_title'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div id='section_box'>
                <div id='item1'>
                    <div id='pic_box'>
                        <img src={Business1} alt="" id='business_pic'/>
                    </div>
                    <div id='business_text'>
                        <div id='business_name'>
                            Partick
                        </div>
                        <div id='rating'>
                            <div id='star'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5479 0.957121C8.72831 0.575191 9.27169 0.575191 9.4521 0.957121L11.7455 5.8124C11.8184 5.96671 11.965 6.07318 12.1342 6.09482L17.4606 6.77562C17.8796 6.82918 18.0475 7.34597 17.74 7.63557L13.8311 11.3171C13.7068 11.4341 13.6508 11.6064 13.6826 11.7741L14.681 17.0501C14.7596 17.4651 14.32 17.7845 13.9495 17.5816L9.24023 15.0016C9.09057 14.9196 8.90943 14.9196 8.75977 15.0016L4.05049 17.5816C3.68004 17.7845 3.24043 17.4651 3.31897 17.0501L4.31742 11.7741C4.34915 11.6064 4.29318 11.4341 4.16895 11.3171L0.260005 7.63557C-0.0474836 7.34597 0.120432 6.82918 0.539418 6.77562L5.86577 6.09482C6.03505 6.07318 6.18159 5.96671 6.25448 5.8124L8.5479 0.957121Z" fill="black"/>
                                </svg>
                            </div>
                            <div id='numbers'>
                                4.91 (484)
                            </div>
                        </div>
                    </div>
                    <div id='tags'>
                        <div id='l1'>G11-G18</div>
                        <div id='l2'>Safe-Quiet-Family friendly</div>
                    </div>
                </div>
                <div id='item1'>
                    <div id='pic_box'>
                        <img src={Business2} alt="" id='business_pic'/>
                    </div>
                    <div id='business_text'>
                        <div id='business_name'>
                            Hillhead
                        </div>
                        <div id='rating'>
                            <div id='star'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5479 0.957121C8.72831 0.575191 9.27169 0.575191 9.4521 0.957121L11.7455 5.8124C11.8184 5.96671 11.965 6.07318 12.1342 6.09482L17.4606 6.77562C17.8796 6.82918 18.0475 7.34597 17.74 7.63557L13.8311 11.3171C13.7068 11.4341 13.6508 11.6064 13.6826 11.7741L14.681 17.0501C14.7596 17.4651 14.32 17.7845 13.9495 17.5816L9.24023 15.0016C9.09057 14.9196 8.90943 14.9196 8.75977 15.0016L4.05049 17.5816C3.68004 17.7845 3.24043 17.4651 3.31897 17.0501L4.31742 11.7741C4.34915 11.6064 4.29318 11.4341 4.16895 11.3171L0.260005 7.63557C-0.0474836 7.34597 0.120432 6.82918 0.539418 6.77562L5.86577 6.09482C6.03505 6.07318 6.18159 5.96671 6.25448 5.8124L8.5479 0.957121Z" fill="black"/>
                                </svg>
                            </div>
                            <div id='numbers'>
                                4.91 (484)
                            </div>
                        </div>
                    </div>
                    <div id='tags'>
                        <div id='l1'>G11-G18</div>
                        <div id='l2'>Safe-Quiet-Family friendly</div>
                    </div>
                </div>
            </div>
            <div id='button_box'>
                <button id='see_all_button'>See All</button>
            </div>
        </div>
)
}
export default BigBar