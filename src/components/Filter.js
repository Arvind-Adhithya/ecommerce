import React,{Component} from 'react';

class Filter extends Component {
   render() {
      return (
         <div className="row">
             <div className="col-md-4">
                 {this.props.count} Products Found!
             </div>
             <div className="col-md-4">
                 <label>
                     Order by
                     <select className="form-control" value={this.props.sort}
                     onChange={this.props.handleChangeSort}>
                     <option value="">Select</option>   
                     <option value="lowest">lowest to highest</option>
                     <option value="highest">highest to lowest</option>
                     </select>
                 </label>
             </div>
            <div className="col-md-4"></div>
            <label>
                     filter size
                     <select className="form-control" value={this.props.size}
                     onChange={this.props.handleChangeSize}>
                     <option value="">ALL</option>   
                     <option value="x">X</option>
                     <option value="s">S</option>
                     <option value="m">M</option>   
                     <option value="l">L</option>   
                     <option value="xl">XL</option>   
                     <option value="xxl">XXL</option>   
                     </select>
                 </label>
         </div>
      )
   }
}
export default Filter;