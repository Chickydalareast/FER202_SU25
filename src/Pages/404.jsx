import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className=" display-1 fw-bold text-primary">404</h1>
                <p className="fs-3">
                    <span className="text-danger">Opps!  </span>
                    Trang không tồn tại.
                </p>
                <p className="lead">
                    Trang bạn đang tìm kiếm không tồn tại
                </p>
                <Link to="/" className="btn btn-primary btn-lg">
                    Về Trang Chủ
                </Link>
            </div>
        </div>);
}
export default NotFoundPage;