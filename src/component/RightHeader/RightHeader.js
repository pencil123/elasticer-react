import * as bs from 'react-bootstrap';
import './RightHeader.css';

function RightHeader() {
  return (
      <bs.Container  fluid>
        <div className="rightHeader">
        <i className="icon iconfont icon-ren-copy"></i>
        <span>LyZhang</span>
        </div>
        <div className="breadCrumb">
          <bs.Breadcrumb>
            <bs.BreadcrumbItem>hello</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>world</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>hello</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>world</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>hello</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>world</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>hello</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>world</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>hello</bs.BreadcrumbItem>
            <bs.BreadcrumbItem>world</bs.BreadcrumbItem>
          </bs.Breadcrumb>
        </div>
      </bs.Container>
  );
}
export default RightHeader;
