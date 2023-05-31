import BreadcrumbsComponent from "./components/BreadcrumbsComponent"
import { BsTextLeft } from "react-icons/bs";
import { useRef } from "react";

export default function Policy(props) {
    const content = [{key: 1, link: "/", text: "Trang chủ"}, 
    {key: 2, link: "#", text: props.type}]
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const section4 = useRef(null)
    const section5 = useRef(null)
    const section6 = useRef(null)
    const scroll = (sec) => {
        let destination;
        if (sec === 1) {
            destination = section1
        } else if (sec === 2) {
            destination = section2
        } else if (sec === 3) {
            destination = section3
        } else if (sec === 4) {
            destination = section4
        } else if (sec === 5) {
            destination = section5
        } else {
            destination = section6
        }
        destination.current.scrollIntoView({behavior: 'smooth'});
    };
    let texts = []
    if (props.type === "Câu hỏi thường gặp") {
        texts = [{type: section1, text: "1. Giá sản phẩm bán tại maxvina.vn đã bao gồm thuế VAT chưa?"},
            {type: "normal", text: "Tất cả sản phẩm bán tại maxvina.vn đều đã bao gồm thuế VAT."},
            {type: section2, text: "2. Làm sao để nhận hóa đơn VAT?"},
            {type: "normal", text: "Sau khi đặt hàng thành công, nếu Quý khách có nhu cầu xuất hóa đơn VAT thì vui lòng liên hệ với chúng tôi để được hỗ trợ."},
            {type: "bullet", text: "Tổng đài: 0962 247 455"},
            {type: "bullet", text: "Email: daesunvinacompany@gmail.com"},
            {type: section3, text: "3. Làm sao biết được đơn đặt hàng của bạn thành công?"},
            {type: "normal", text: "Khi đặt hàng thành công, trong vòng 24 tiếng, Quý khách sẽ nhận được cuộc gọi thông báo xác nhận đơn hàng."},
            {type: "normal", text: "Ghi chú: Đối với đơn đặt hàng trong giờ hành chính thì chúng tôi sẽ liên hệ ngay trong ngày. Đặt hàng sau 17h, chúng tôi sẽ liên hệ vào sáng hôm sau. Đặt hàng sau 17h thứ sáu, chúng tôi sẽ liên hệ vào sáng thứ hai tuần kế tiếp."},
            {type: section4, text: "4. Bạn không nhận được kết quả thanh toán, bạn phải làm gì?"},
            {type: "normal", text: "Sau khi hoàn tất các bước thanh toán theo hướng dẫn, nếu sau quá 60 giây bạn không nhận được bất cứ kết quả thông báo nào. Bạn vui lòng liên hệ với chúng tôi để nhận được kết quả giao dịch. Bạn không nên thực hiện tiếp giao dịch để tránh trường hợp bị trừ tiền thêm một lần nữa."},
            {type: section5, text: "5. Khi nhận hàng có phải làm thủ tục gì không?"},
            {type: "normal", text: "Có. Khi nhận hàng quý khách phải kiểm tra kỹ hàng hóa, phụ kiện và quà tặng kèm theo (nếu có)… và ký xác nhận. Nếu phát hiện bất kỳ lỗi sản phẩm hay sai sót gì thì phải báo ngay cho nhân viên giao nhận hoặc nhân viên bán hàng để xử lý kịp thời."},
            {type: section6, text: "6. Khi đặt hàng thành công thì trong bao lâu sẽ nhận được hàng?"},
            {type: "bullet", text: "Khu vực nội thành Hà Nội, Max Vina hỗ trợ giao trong ngày."},
            {type: "bullet", text: "Khu vực ngoại thành Hà Nội và các Tỉnh khác thời gian giao hàng từ 01 - 05 ngày làm việc, phụ thuộc vào đơn vị vận chuyển chuyển phát hàng hóa."},
            {type: "normal", text: "Lưu ý: Trong những ngày có chương trình khuyến mãi lớn thì thời gian giao hàng có thể chậm hơn bình thường do số lượng đơn đặt hàng nhiều. Đặc biệt, nếu quý khách có nhu cầu giao hàng gấp, vui lòng cho chúng tôi biết để có thể ưu tiên giao hàng sớm cho quý khách."},  
        ]
    } else if (props.type === "Giải quyết khiếu nại") {
        texts = [
        {type: "normal", text: "Mọi thông tin về khiếu nại, khách hàng vui lòng liên hệ ngay với chúng tôi để được hỗ trợ tốt nhất."},
        {type: "bullet", text: "Thời gian tiếp nhận: Sáng từ 8h00 – 12h00; chiều từ 13h00 – 17h30 từ thứ 2 đến thứ 6."},
        {type: "bullet", text: "Địa chỉ: Số 2, Ngõ 2 Trung Kính, P. Trung Hòa, Q. Cầu Giấy, Hà Nội"},
        {type: "bullet", text: "Tổng đài: 0962 247 455"},
        {type: "bullet", text: "Email: daesunvinacompany@gmail.com"}]
    } else if (props.type === "Chính sách giao hàng") {
        texts = [
            {type: "bullet", text: "Khu vực nội thành Hà Nội: 20.000 - 30.000 VNĐ"},
            {type: "bullet", text: "Khu vực ngoại thành Hà Nội và các Tỉnh khác: phí giao hàng được tính dựa trên địa chỉ giao hàng và khối lượng đơn hàng và được thông báo tới khách hàng tại trang thanh toán."},
            {type: section2, text: "2. THỜI GIAN GIAO HÀNG"},
            {type: "bullet", text: "Khu vực nội thành Hà Nội, Max Vina hỗ trợ giao trong ngày."},
            {type: "bullet", text: "Khu vực ngoại thành Hà Nội và các Tỉnh khác thời gian giao hàng từ 01 - 05 ngày làm việc, phụ thuộc vào đơn vị vận chuyển chuyển phát hàng hóa."},
            {type: "bullet", text: "Thời gian giao hàng được bắt đầu tính sau khi đơn hàng của Quý khách được xác nhận thành công bằng cuộc gọi của nhân viên chăm sóc khách hàng của chúng tôi."},
            {type: "normal", text: "Quý khách hàng lưu ý:"},
            {type: "bullet", text: "Trong những ngày có chương trình khuyến mãi lớn, thời gian giao hàng có thể chậm hơn bình thường do số lượng đơn đặt hàng nhiều. Đặc biệt, nếu Quý khách có nhu cầu giao hàng gấp, vui lòng cho chúng tôi biết để có thể ưu tiên giao hàng sớm."},
            {type: "bullet", text: "Để đảm bảo hàng hoá được vận chuyển nhanh chóng và thuận tiện nhất, khách hàng nên đăng ký địa điểm nhận hàng cố định, hạn chế việc thay đổi địa chỉ."},
            {type: "bullet", text: "Trường hợp thay đổi địa chỉ nhận hàng, khách hàng cần phải báo trước tối thiểu là 01 ngày để bộ phận giao hàng phát đúng lịch trình và thời gian cam kết."},
            {type: section3, text: "3. HỦY ĐƠN HÀNG"},
            {type: "normal", text: "Đơn hàng sẽ bị hủy sau 02 lần nhân viên giao nhận không thể liên lạc hoặc không thể giao hàng được cho Quý khách."},
            {type: "normal", text: "Quý khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng tại Hotline 0962 247 455 để được hướng dẫn và chăm sóc."},  
        ]     
    } else if (props.type === "Chính sách đổi trả") {
        texts = [{type: section1, text: "1. ĐIỀU KIỆN ÁP DỤNG"},
            {type: "bullet", text: "Đối tượng áp dụng: Khách hàng đã mua sản phẩm tại website https://maxvina.vn/."},
            {type: "bullet", text: "Thời gian đổi hàng phát sinh: Sản phẩm được đổi trong vòng 07 (bảy) ngày kể từ khi giao hàng."},
            {type: "bullet", text: "Sản phẩm phải còn nguyên bao gói."},
            {type: "bullet", text: "Sản phẩm được xác định lỗi bởi các kỹ thuật viên của chúng tôi."},
            {type: "normal", text: "Khách hàng vui lòng kiểm tra tình trạng hàng hóa và có thể đổi hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:"},
            {type: "bullet", text: "Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng."},
            {type: "bullet", text: "Không đủ số lượng, không đủ bộ như trong đơn hàng."},
            {type: "bullet", text: "Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…"},
            {type: section2, text: "2. TRƯỜNG HỢP KHÔNG CHẤP NHẬN ĐỔI TRẢ"},
            {type: "bullet", text: "Lỗi hỏng hóc sản phẩm do khách hàng vận hành không đúng chỉ dẫn."},
            {type: "bullet", text: "Khách hàng tự làm ảnh hưởng đến tình trạng bên ngoài sản phẩm như rách bao bì, mất hoặc vỡ nát vỏ hộp, trầy, xước, vỡ sản phẩm…"},
            {type: "bullet", text: "Khách hàng yêu cầu đổi trả hàng hóa vì trầy, xước, móp méo, ố, vàng… sau khi đã được kiểm tra và ký nhận bàn giao từ nhân viên giao hàng."},
            {type: section3, text: "3.   LIÊN HỆ GIẢI QUYẾT ĐỔI TRẢ HÀNG"},
            {type: "normal", text: "Khách hàng có thể mang hàng trực tiếp đến cửa hàng của chúng tôi hoặc gửi sản phẩm qua đường bưu điện/chuyển phát nhanh."},
            {type: "bullet", text: "Thời gian tiếp nhận: Sáng từ 8h00 – 12h00; chiều từ 13h00 – 17h30 từ thứ 2 đến thứ 6"},
            {type: "bullet", text: "Địa chỉ: Số 2, Ngõ 2 Trung Kính, P. Trung Hòa, Q. Cầu Giấy, Hà Nội"},
            {type: "bullet", text: "Tổng đài:  0962 247 455"},
            {type: "bullet", text: "Email: daesunvinacompany@gmail.com"},
            {type: "normal", text: "Lưu ý: Khách hàng vui lòng chi trả chi phí chuyển phát sản phẩm đến cửa hàng. Chúng tôi sẽ hỗ trợ chiều trả sản phẩm cho Khách hàng."},
            {type: "normal", text: "Quy trình xử lý thủ tục đổi hàng được thực hành trong vòng 07 (bảy) ngày tính từ ngày chúng tôi nhận đủ thông tin và các giấy tờ theo quy định từ phía khách hàng."},
        ]
    } else if (props.type === "Chính sách bảo hành") {
        texts = [{type: "normal", text: "Quy định này được áp dụng đối các sản phẩm được mua tại website maxvina.vn. Trong thời gian sử dụng nếu gặp bất kỳ trục trặc nào hoặc lỗi do người sử dụng Khách hàng có thể liên hệ trực tiếp với công ty hoặc nhân viên bán hàng của chúng tôi để được hỗ trợ."},
                {type: section1, text: "1.   THỜI HẠN VÀ ĐIỀU KIỆN BẢO HÀNH"},
                {type: "normal", text: "Thời hạn bảo hành (tính từ ngày nhận hàng của khách hàng):"},
                {type: "bullet", text: "Các loại bếp ga: 01 (một) năm"},
                {type: "bullet", text: "Nồi, chảo: 01 (một) tháng"},
                {type: "bullet", text: "Khò ga mini: 03 (ba) tháng"},
                {type: "bullet", text: "Máy xịt thơm phòng: 06 (sáu) tháng"},
                {type: "bullet", text: "Máy sưởi ga/điện: 01 (một) năm"},
                {type: "bullet", text: "Đèn ga dã ngoại: 06 (sáu) tháng"},
                {type: "normal", text: "Các sản phẩm được bảo hành miễn phí do lỗi kỹ thuật được xác định từ nhà sản xuất"},
                {type: "normal", text: "Sản phẩm đang trong thời hạn bảo hành."},
                {type: section2, text: "2.   TRƯỜNG HỢP KHÔNG ĐƯỢC BẢO HÀNH"},
                {type: "bullet", text: "Sản phẩm đã hết hạn bảo hành."},
                {type: "bullet", text: "Sản phẩm bị hư hỏng do thiên tai, sử dụng hóa chất, hoặc sản phẩm bị rơi đổ, va đập do tác động lực từ bên ngoài."},
                {type: "bullet", text: "Sản phẩm hư hỏng do tự ý lắp đặt, sử dụng; bảo quản không đúng cách, không tuân theo sách hướng dẫn hoặc các cảnh báo thể hiện trên sản phẩm."},
                {type: "bullet", text: "Lỗi hao mòn tự nhiên khi sử dụng hoặc do điều kiện môi trường nơi đặt sản phẩm không phù hợp."},
                {type: "bullet", text: "Sản phẩm có dấu hiệu đã tháo lắp hoăc thay đổi kết cấu sản phẩm."},
                {type: "bullet", text: "Các phụ kiện kèm theo sản phẩm không phải là linh kiện bảo hành. Ví dụ: một số phụ kiện kèm theo của hãng khác…"},
                {type: "bullet", text: "Các trường hợp yêu cầu về vệ sinh sản phẩm, bảo trì sản phẩm không nằm trong các hạng mục bảo hành."},
                {type: section3, text: "3.   QUY TRÌNH BẢO HÀNH"},
                {type: "bullet", text: "Khách hàng vui lòng thông báo chúng tôi ngay sau khi phát hiện sản phẩm gặp sự cố."},
                {type: "bullet", text: "Sau khi được tư vấn, khách hàng gửi sản phẩm về cho chúng tôi theo địa chỉ: Số 2, Ngõ 2 Trung Kính, P. Trung Hòa, Q. Cầu Giấy, TP. Hà Nội."},
                {type: "bullet", text: "Kỹ thuật viên sẽ tiếp nhận, xác nhận sản phẩm còn điều kiện bảo hành và thông báo thời gian hoàn thành để trả sản phẩm cho khách hàng."},
                {type: "bullet", text: "Hoàn trả sản phẩm sau bảo hành và xác nhận sản phẩm đã được sửa chữa, khắc phục sự cố với khách hàng."},
                {type: "normal", text: "Lưu ý: Khách hàng vui lòng chi trả chi phí chuyển phát sản phẩm về trung tâm bảo hành. Chúng tôi sẽ hỗ trợ chiều trả sản phẩm cho Khách hàng."}]
    } else if (props.type === "Chính sách thanh toán") {
        texts = [{type: "normal", text: "Khách hàng có thể lựa chọn các hình thức thanh toán cho đơn hàng của mình khi mua sản phẩm trên website maxvina.vn bao gồm:"},
                {type: section1, text: "1. CHUYỂN KHOẢN QUA NGÂN HÀNG"},
                {type: "normal", text: "Sau khi chuyển khoản xong khách hàng vui lòng liên hệ với chúng tôi để đơn hàng được xử lý nhanh hơn. Khi nhận được chuyển khoản chúng tôi sẽ tiến hành giao hàng cho Quý khách."},
                {type: "normal", text: "Thông tin tài khoản:"},
                {type: "bullet", text: "Ngân hàng TMCP Kỹ thương Việt Nam (TECHCOMBANK)"},
                {type: "bullet", text: "Chủ tài khoản: CTY TNHH DAESUN VINA"},
                {type: "bullet", text: "Số tài khoản: 1912 893 014 8889"},
                {type: section2, text: "2. THANH TOÁN TRỰC TUYẾN"},
                {type: "normal", text: "Khách hàng có thể lựa chọn các hình thức thanh toán trực tuyến như sau:"},
                {type: "bullet", text: "Mã QR"},
                {type: "bullet", text: "Thẻ nội địa và tài khoản ngân hàng"},
                {type: "bullet", text: "Thẻ thanh toán quốc tế"},
                {type: section3, text: "3. THANH TOÁN KHI NHẬN HÀNG (COD)"},
                {type: "normal", text: "Hình thức thanh toán khi nhận hàng (COD) cho phép Khách hàng thanh toán tiền trực tiếp cho nhân viên giao hàng."},
                {type: "normal", text: "Lưu ý: chúng tôi hỗ trợ giao hàng và thanh toán khi nhận hàng cho các đơn hàng có tổng trị giá từ 2.000.000 VNĐ (Hai triệu Việt Nam đồng) trở xuống."},
                {type: "normal", text: "Mọi thắc mắc chi tiết về hình thức thanh toán vui lòng gọi số 0962 247 455 để được giải đáp."},]
    } else if (props.type === "Chính sách bảo mật") {
        texts = [{type: section1, text: "1. MỤC ĐÍCH THU THẬP THÔNG TIN"},
                {type: "normal", text: "Việc thu thập thông tin chủ yếu trên website maxvina.vn bao gồm: Email, số điện thoại, địa chỉ, tên đăng nhập, mật khẩu đăng nhập. Đây là các thông tin mà Max Vina cần khách hàng cung cấp bắt buộc khi đăng ký sử dụng dịch vụ, nhằm liên hệ xác nhận khi khách hàng đăng ký mua hàng trên website nhằm đảm bảo quyền lợi cho khách hàng."},
                {type: "normal", text: "Khách hàng tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, khách hàng có trách nhiệm thông báo kịp thời cho Max Vina về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp."},
                {type: section2, text: "2. PHẠM VI SỬ DỤNG THÔNG TIN"},
                {type: "normal", text: "Max Vina rất coi trọng việc bảo mật thông tin khách hàng nên chúng tôi cam kết sẽ tuyệt đối giữ bí mật thông tin khách hàng, không tự ý sử dụng thông tin với mục đích không mang lại lợi ích cho khách hàng. Chúng tôi cam kết không buôn bán, trao đổi thông tin bảo mật của khách hàng cho bất kỳ bên thứ ba nào."},
                {type: "normal", text: "Website maxvina.vn chỉ sử dụng thông tin khách hàng cấp để:"},
                {type: "bullet", text: "Cung cấp các dịch vụ liên quan đến khách hàng."},
                {type: "bullet", text: "Gửi các thông báo về các hoạt động trao đổi thông tin giữa chúng tôi và khách hàng."},
                {type: "bullet", text: "Ngăn ngừa các hoạt động phá hoại tài khoản người dùng của khách hàng hoặc các hoạt động giả mạo khách hàng."},
                {type: "bullet", text: "Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt."},
                {type: "bullet", text: "Chúng tôi có trách nhiệm hợp tác cung cấp thông tin cá nhân khách hàng khi có yêu cầu từ Cơ quan Nhà nước có thẩm quyền. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng"},
                {type: section3, text: "3. THỜI GIAN LƯU TRỮ THÔNG TIN"},
                {type: "normal", text: "Max Vina sẽ lưu trữ các thông tin cá nhân do khách hàng cung cấp trên hệ thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho khách hàng; hoặc cho đến khi hoàn thành mục đích thu thập thông tin; hoặc khi khách hàng có yêu cầu hủy các thông tin đã cung cấp."},
                {type: section4, text: "4. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN"},
                {type: "normal", text: "CÔNG TY TNHH DAESUN VINA"},
                {type: "bullet", text: "Địa chỉ: Tầng 2, Số 2, Ngõ 2 Trung Kính, P. Trung Hòa, Q. Cầu Giấy, TP. Hà Nội, Việt Nam."},
                {type: "bullet", text: "Điện thoại: 0962 247 455"},
                {type: "bullet", text: "Email: daesunvinacompany@gmail.com"},
                {type: section5, text: "5. PHƯƠNG TIỆN VÀ CÔNG CỤ ĐỂ NGƯỜI DÙNG TIẾP CẬN VÀ CHỈNH SỬA DỮ LIỆU CÁ NHÂN CỦA MÌNH"},
                {type: "normal", text: "Khách hàng có thể thực hiện các quyền tiếp cận và chỉnh sửa dữ liệu cá nhân bằng cách truy cập vào website hoặc liên hệ với chúng tôi qua email; hoặc địa chỉ liên lạc được công bố trên website maxvina.vn."},
                {type: section6, text: "6. CAM KẾT BẢO MẬT THÔNG TIN CỦA KHÁCH HÀNG"},
                {type: "normal", text: "Chúng tôi cam kết đảm bảo an toàn thông tin cho quý khách hàng khi đăng ký thông tin cá nhân trên website maxvina.vn. Chúng tôi cam kết không trao đổi mua bán thông tin khách hàng vì mục đích thương mại."},
                {type: "normal", text: "Để đảm bảo thông tin của khách hàng được bảo mật tốt nhất, chúng tôi khuyến cáo khách hàng nên sử dụng mật khẩu có độ phức tạp cao, không đăng nhập tài khoản của mình tại các dịch vụ máy tính công cộng, thường xuyên quét virus trên máy tính. Max Vina sẽ không chịu trách nhiệm khi những thông tin cá nhân của quý khách bị rò rỉ vì những nguyên nhân từ phía khách hàng."},
                {type: "normal", text: "Chính sách bảo mật chỉ áp dụng khi khách hàng đăng ký trên website maxvina.vn. Mọi thông tin quý khách hàng đăng ký tài những website khác đều không thuộc phạm vi hiệu lực của chính sách bảo mật thông tin này."}]
    } else  {
        texts = [{type: "normal", text: "Khi quý khách truy cập vào trang web của chúng tôi có nghĩa là quý khách đồng ý với các điều khoản này. Trang web có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong Quy định và Điều kiện sử dụng, vào bất cứ lúc nào. Các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web, sau khi các thay đổi về quy định và điều kiện được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó."},
                {type: "normal", text: "Quý khách vui lòng kiểm tra thường xuyên để cập nhật những thay đổi của chúng tôi."},
                {type: section1, text: "1. HƯỚNG DẪN SỬ DỤNG TRANG WEB"},
                {type: "bullet", text: "Bạn phải đủ 18 tuổi hoặc được cha mẹ hoặc người giám hộ hợp pháp giám sát khi sử dụng trang web."},
                {type: "bullet", text: "Chúng tôi cấp giấy phép sử dụng trang web để bạn mua sắm theo các điều khoản và điều kiện đã quy định."},
                {type: "bullet", text: "Cấm sử dụng trang web với mục đích thương mại hoặc đại diện cho bất kỳ đối tác thứ ba nào mà chúng tôi chưa cho phép bằng văn bản. Vi phạm có thể dẫn đến hủy giấy phép sử dụng mà không cần thông báo trước."},
                {type: "bullet", text: "Trang web chỉ cung cấp thông tin về sản phẩm và nhận xét hiển thị là ý kiến cá nhân của khách hàng, không phải ý kiến của chúng tôi."},
                {type: "bullet", text: "Bạn phải đăng ký tài khoản và cung cấp thông tin cá nhân chính xác. Bạn có trách nhiệm bảo mật tài khoản và thông báo cho chúng tôi nếu tài khoản bị truy cập trái phép. Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào do việc không tuân thủ quy định."},
                {type: section2, text: "2. CHẤP NHẬN ĐƠN HÀNG VÀ GIÁ CẢ"},
                {type: "bullet", text: "Chúng tôi có quyền từ chối hoặc hủy đơn hàng của bạn vào bất kỳ lúc nào và có thể yêu cầu thông tin bổ sung trước khi chấp nhận đơn hàng."},
                {type: "bullet", text: "Chúng tôi cam kết cung cấp thông tin giá chính xác nhất. Tuy nhiên, đôi khi có thể xảy ra sai sót. Trong trường hợp này, chúng tôi sẽ liên hệ và hướng dẫn hoặc hủy đơn hàng. Chúng tôi cũng có quyền từ chối hoặc hủy bỏ đơn hàng, kể cả đã xác nhận hoặc đã thanh toán."},
                {type: section3, text: "3. THƯƠNG HIỆU VÀ BẢN QUYỀN"},
                {type: "bullet", text: "Mọi quyền sở hữu trí tuệ, nội dung và thiết kế trên trang web là tài sản của chúng tôi. Toàn bộ nội dung được bảo vệ bởi luật bản quyền."},
                {type: section4, text: "4. QUYỀN PHÁP LÝ"},
                {type: "normal", text: "Điều khoản và nội dung trang web này tuân thủ luật pháp Việt Nam. Bất kỳ tranh chấp nào phát sinh sẽ được giải quyết tại Tòa án có thẩm quyền ở Việt Nam."},
                {type: section5, text: "5. QUY ĐỊNH VỀ BẢO MẬT"},
                {type: "bullet", text: "Chúng tôi coi trọng bảo mật thông tin và sử dụng biện pháp bảo vệ tốt nhất. Thông tin thanh toán sẽ được mã hóa để đảm bảo an toàn. Tuy nhiên, sau khi hoàn thành quá trình đặt hàng, bạn thoát khỏi chế độ an toàn."},
                {type: "bullet", text: "Cấm can thiệp vào hệ thống hoặc thay đổi dữ liệu trang web. Cấm phát tán, truyền bá hoặc khuyến khích hoạt động can thiệp, phá hoại hoặc xâm nhập dữ liệu hệ thống. Vi phạm có thể dẫn đến mất quyền lợi và bị truy tố theo pháp luật nếu cần thiết."},
                {type: "bullet", text: "Thông tin giao dịch sẽ được bảo mật, trừ khi có yêu cầu từ cơ quan pháp luật."},
                {type: section6, text: "6. THAY ĐỔI VÀ HỦY BỎ GIAO DỊCH"},
                {type: "bullet", text: "Bạn có quyền chấm dứt giao dịch bằng cách thông báo cho chúng tôi qua nhân viên chăm sóc khách hàng hoặc số điện thoại hỗ trợ."},
                {type: "bullet", text: "Bạn phải trả lại hàng hoá chưa sử dụng và không nhận lợi ích nào từ hàng hoá (tuỳ theo chính sách đổi trả hàng)."},
            ]
    }

    return <>
        <BreadcrumbsComponent content={content}/>
        <div className="flex flex-col sm:flex-row sm:m-8 my-8 mx-2 justify-between">
            <div className="sm:w-[65%] order-2 sm:order-1">
                <ul className="list-disc">
                {props.type === "Chính sách giao hàng" &&
                    <>
                        <div className="my-4"><span className="font-bold">Max Vina</span> luôn hướng đến việc 
                        cung cấp dịch vụ vận chuyển tốt nhất với mức phí cạnh tranh cho tất cả 
                        các đơn hàng mà Quý khách đặt với chúng tôi. Chúng tôi hỗ trợ giao hàng 
                        trên toàn quốc với chính sách giao hàng cụ thể như sau:</div>
                        <div className="font-bold text-2xl" ref={section1}>1. PHÍ GIAO HÀNG</div>
                        <div className="my-4">Với tiêu chí mang đến trải nghiệm mua sắm tuyệt vời nhất cho khách hàng, 
                        <span className="font-bold ml-1">Max Vina</span> hỗ trợ phí giao hàng lên đến 
                        <span className="font-bold ml-1">100.000 VNĐ</span> trên 1 đơn hàng.</div>
                    </>}
                {texts.map((i, index) => 
                    i.type === "normal" ? <div key={index} className={index !== 0 ? "my-4" : "mb-4"}>{i.text}</div> :
                    i.type === "bullet" ? <li  key={index} className="my-4 ml-8">{i.text}</li> :
                    <div  key={index} className="font-bold text-2xl" ref={i.type}>{i.text}</div>) 
                }
                </ul>
            </div>
            <div className="sm:w-[30%] bg-white h-fit p-4 font-medium rounded-[10px] sm:order-2 order-1">
                <div className="flex items-center">
                    <BsTextLeft/> <div className="ml-1 text-xl">Nội dung</div>
                </div>
                {props.type === "Chính sách giao hàng" &&
                    <button className="block text-start hover:text-[#C4171D] my-2" 
                    onClick={()=> scroll(1)}>1. PHÍ GIAO HÀNG</button>
                }

                {texts.filter(el => {return el.type !== "normal" && el.type !== "bullet"})
                    .map(i => <button className="block text-start hover:text-[#C4171D] my-2" 
                                onClick={()=> scroll(parseInt(i.text.charAt(0)))}>{i.text}</button>)
                }
                    
            </div>
        </div>
    </>
}