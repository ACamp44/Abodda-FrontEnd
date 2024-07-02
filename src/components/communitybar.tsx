import './communitybar.css'
import BookIcon from '../assets/book.svg'
import Heart from '../assets/heart.svg'

function CommunityBar(props) {
    return (
        <div id='big_section'>
            <div id='big_title'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div id='section_box'>
                <div id='item1'>
                    <div id='pic_box1'>
                        <div id='top_row'>
                            <div id='icon_box1'>
                                <img src={BookIcon} alt="" id='icon'/>
                            </div>
                            <div id='icon_box2'>
                                <img src={Heart} alt="" id='icon'/>
                            </div>
                        </div>
                        <div id='bottom_row'>
                            Any Good Schools in Glasgow?
                        </div>
                    </div>
                    <div id='business_text'>
                        <div id='business_name'>
                            Schools
                        </div>
                    </div>
                    <div id='tags'>
                        <div id='l1'>Joshua20, Glasgow, UK</div>
                        <div id='l2'>142 reples - 30 likes - 38 minutes ago  </div>
                    </div>
                </div>
                <div id='item1'>
                    <div id='pic_box2'>
                        <div id='top_row'>
                            <div id='icon_box1'>
                                <img src={BookIcon} alt="" id='icon'/>
                            </div>
                            <div id='icon_box2'>
                                <img src={Heart} alt="" id='icon'/>
                            </div>
                        </div>
                        <div id='bottom_row'>
                            How do I rent in Scotland?
                        </div>
                    </div>
                    <div id='business_text'>
                        <div id='business_name'>
                            Renting
                        </div>
                    </div>
                    <div id='tags'>
                        <div id='l1'>Joshua20, Glasgow, UK</div>
                        <div id='l2'>142 reples - 30 likes - 38 minutes ago  </div>
                    </div>
                </div>
            </div>
            <div id='button_box'>
                <button id='see_all_button'>See All</button>
            </div>
        </div>
)
}
export default CommunityBar