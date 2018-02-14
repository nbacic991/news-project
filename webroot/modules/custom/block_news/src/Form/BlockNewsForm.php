<?php
/**
 * Created by PhpStorm.
 * User: veus
 * Date: 11/24/17
 * Time: 4:19 PM
 */

namespace Drupal\block_news\Form;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;



class BlockNewsForm extends FormBase
{
    public function getFormId()
    {
        return 'block_news_form_block';

    }

    /**
     * {@inheritdoc}
     */

    public function buildForm(array $form, FormStateInterface $form_state)
    {

    }

    /**
     * {@inheritdoc}
     */
    public function validateForm(array &$form, FormStateInterface $form_state)
    {

    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {

    }
}