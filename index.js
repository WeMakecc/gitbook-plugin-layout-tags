module.exports = {
    blocks: {
        image: {
            blocks: ['image_url', 'image_text'],
            process: function(parentBlock) {
              var img_tag = "<img src='"+parentBlock.blocks[0].body+"' alt='"+parentBlock.blocks[0].args[0]+"' width='"+parentBlock.blocks[0].args[1]+"' align='"+parentBlock.blocks[0].args[2]+"' style='"+parentBlock.blocks[0].args[3]+"'>";
              var text_tag;
              function() {
                if(parentBlock.blocks[1]!=undefined) {
                  text_tag = parentBlock.blocks[1].body;
                } else {
                  text_tag = "";
                }
              };
              return "<p style='overflow:hidden'>"+img_tag+""+text_tag+"</p>";
            }
        },
        // grid: {
        //     blocks: ['col'],
        //     process: function(parentBlock) {
        //         var columns = '';
        //         console.log(parentBlock.blocks);
        //         parentBlock.blocks.forEach((block) => {
        //           columns += `<div style="flex: ${block.args[0]};">${block.body}</div>`;
        //         });

        //         return `<div style="display: flex;">${columns}</div>`;
        //     }
        // }
        grid: {
            blocks: ['col1', 'col2'],
            process: function(parentBlock) {
                return `<div style="float: left; width: 48%; margin-right: 2%;">`+parentBlock.blocks[0].body+`</div><div style="float: left; width: 48%; margin-left: 2%;">`+parentBlock.blocks[1].body+`</div>`;
            }
        }
    }
};