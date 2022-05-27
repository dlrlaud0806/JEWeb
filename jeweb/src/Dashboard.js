import { CardHeading } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="container">
      <div className='p-4 m-4 fs-3 fw-bolder lh-lg text-center'>
        <h2 class="section-heading text-uppercase">서비스</h2>
      </div>

      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <Link to="/board">
            <CardHeading width='200' height='200' />
          </Link>
        </span>
        <h4 class="my-3">블로그 리뷰 리스트</h4>
      </div>

      <div class="col-md-4">
        <span class="fa-stack fa-4x">
          <Link to="/collection">
            <CardHeading width='200' height='200' />
          </Link>
        </span>
        <h4 class="my-3">파일 컨버팅</h4>
      </div>
    </div>
  );
}


export default Dashboard;